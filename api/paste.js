import { getPaste } from "./store.js";

export default function handler(req, res) {
  const id = req.query.id;
  if (!id) return res.json({ error: "missing id" });

  const content = getPaste(id);

  if (!content) return res.json({ error: "not found" });

  res.json({ content });
}
