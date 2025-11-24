// 简单的内存存储
// 注意：在 Vercel 生产环境中，数据不会持久化
const memoryStore = {};

export function setPaste(id, content) {
  memoryStore[id] = content;
  return true;
}

export function getPaste(id) {
  return memoryStore[id] || null;
}
