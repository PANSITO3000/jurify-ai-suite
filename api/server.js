export default async function handler(req, res) {
  try {
    const { createServer } = await import('../dist/server/index.js');
    const server = createServer();
    await server(req, res);
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
}
