export default async function handler(req, res) {
  try {
    const serverModule = await import('../dist/server/index.js');
    
    // Try different possible handlers
    const serverHandler = serverModule.default;
    
    // Check if it's a function directly
    if (typeof serverHandler === 'function') {
      await serverHandler(req, res);
      return;
    }
    
    // Check if it's an object with handleRequest
    if (serverHandler && typeof serverHandler.handleRequest === 'function') {
      await serverHandler.handleRequest(req, res);
      return;
    }
    
    // Check if it's an object with handle method
    if (serverHandler && typeof serverHandler.handle === 'function') {
      await serverHandler.handle(req, res);
      return;
    }
    
    // If we get here, try to find any function in the module
    for (const [key, value] of Object.entries(serverModule)) {
      if (typeof value === 'function') {
        console.log(`Trying handler: ${key}`);
        await value(req, res);
        return;
      }
    }
    
    throw new Error('No valid handler found in server module');
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
}
