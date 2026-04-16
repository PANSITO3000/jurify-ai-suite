import { createHandler } from '../dist/server/index.js';

const serverHandler = createHandler();

export default async function handler(req, res) {
  try {
    return await serverHandler(req, res);
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
