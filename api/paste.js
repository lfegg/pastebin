const store = {}; // 为了本地开发，不同文件不能共享，等下面通知你怎么合并

export default function handler(req, res) {
  const id = req.query.id;
  if (!id) return res.json({ error: "missing id" });

  const content = store[id];

  if (!content) return res.json({ error: "not found" });

  res.json({ content });
}
