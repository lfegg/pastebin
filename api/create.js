import { setPaste } from "./store.js";

function validate(content) {
  return content.length > 0 && content.length < 100000;
}

function generate_id() {
  return Math.random().toString(36).slice(2, 10);
}

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "POST only" });
  }

  const content = req.body?.content || "";

  const valid = validate(content);
  if (!valid) return res.json({ error: "Invalid content" });

  const id = generate_id();

  setPaste(id, content);

  return res.json({ id });
}
