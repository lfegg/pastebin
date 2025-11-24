import { setPaste } from "./store.js";

function validate(content) {
  return content.length > 0 && content.length < 100000;
}

function generate_id() {
  return Math.random().toString(36).slice(2, 10);
}

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "POST only" });
    }

    const content = req.body?.content || "";

    const valid = validate(content);
    if (!valid) return res.json({ error: "Invalid content" });

    const id = generate_id();

    const success = await setPaste(id, content);
    if (!success) {
      return res.status(500).json({ error: "Failed to save paste" });
    }

    return res.json({ id });
  } catch (err) {
    console.error('Handler error:', err);
    return res.status(500).json({ error: err.message });
  }
}
