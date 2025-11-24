import { getPaste } from "./store.js";

export default async function handler(req, res) {
  try {
    const id = req.query.id;
    if (!id) return res.json({ error: "missing id" });

    const content = await getPaste(id);

    if (!content) return res.json({ error: "not found" });

    res.json({ content });
  } catch (err) {
    console.error('Handler error:', err);
    return res.status(500).json({ error: err.message });
  }
}
