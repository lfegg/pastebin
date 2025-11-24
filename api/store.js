import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// 内存存储作为回退方案
const memoryStore = {};

// 检测是否配置了 Vercel KV
const hasKV = !!process.env.KV_REST_API_URL;
let kvPromise = null;

if (hasKV) {
  kvPromise = import('@vercel/kv').then(module => module.kv).catch(err => {
    console.error('Failed to load @vercel/kv:', err);
    return null;
  });
}

// 本地开发时使用文件系统
let STORE_DIR;
const isLocal = typeof process !== 'undefined' && !process.env.VERCEL;
if (isLocal) {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  STORE_DIR = path.join(__dirname, '..', '.data');
  try {
    if (!fs.existsSync(STORE_DIR)) {
      fs.mkdirSync(STORE_DIR, { recursive: true });
    }
  } catch (err) {
    console.error('Failed to create data directory:', err);
  }
}

export async function setPaste(id, content) {
  try {
    if (isLocal && STORE_DIR) {
      // 本地开发：使用文件系统
      const filePath = path.join(STORE_DIR, `${id}.txt`);
      fs.writeFileSync(filePath, content, 'utf8');
    } else if (kvPromise) {
      // 生产环境：使用 Vercel KV
      const kv = await kvPromise;
      if (kv) {
        await kv.set(`paste:${id}`, content);
      } else {
        memoryStore[id] = content;
      }
    } else {
      // 回退：使用内存存储
      memoryStore[id] = content;
    }
    return true;
  } catch (err) {
    console.error('setPaste error:', err);
    // 回退到内存存储
    memoryStore[id] = content;
    return false;
  }
}

export async function getPaste(id) {
  try {
    if (isLocal && STORE_DIR) {
      // 本地开发：使用文件系统
      const filePath = path.join(STORE_DIR, `${id}.txt`);
      if (fs.existsSync(filePath)) {
        return fs.readFileSync(filePath, 'utf8');
      }
      return null;
    } else if (kvPromise) {
      // 生产环境：使用 Vercel KV
      const kv = await kvPromise;
      if (kv) {
        return await kv.get(`paste:${id}`);
      } else {
        return memoryStore[id] || null;
      }
    } else {
      // 回退：使用内存存储
      return memoryStore[id] || null;
    }
  } catch (err) {
    console.error('getPaste error:', err);
    // 回退到内存存储
    return memoryStore[id] || null;
  }
}
