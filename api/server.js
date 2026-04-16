export default async function handler(req, res) {
  try {
    const serverModule = await import('../dist/server/index.js');
    
    // TanStack Start typically exports a default function
    const serverHandler = serverModule.default;
    
    if (typeof serverHandler === 'function') {
      await serverHandler(req, res);
    } else {
      throw new Error(`Server handler is not a function. Type: ${typeof serverHandler}`);
    }
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
}
