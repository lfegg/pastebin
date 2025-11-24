import { kv } from '@vercel/kv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// 检测是否在本地开发环境
const isLocal = !process.env.KV_REST_API_URL;

// 本地开发时使用文件系统
let STORE_DIR;
if (isLocal) {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  STORE_DIR = path.join(__dirname, '..', '.data');
  if (!fs.existsSync(STORE_DIR)) {
    fs.mkdirSync(STORE_DIR, { recursive: true });
  }
}

export async function setPaste(id, content) {
  try {
    if (isLocal) {
      // 本地开发：使用文件系统
      const filePath = path.join(STORE_DIR, `${id}.txt`);
      fs.writeFileSync(filePath, content, 'utf8');
    } else {
      // 生产环境：使用 Vercel KV
      await kv.set(`paste:${id}`, content);
    }
    return true;
  } catch (err) {
    console.error('setPaste error:', err);
    return false;
  }
}

export async function getPaste(id) {
  try {
    if (isLocal) {
      // 本地开发：使用文件系统
      const filePath = path.join(STORE_DIR, `${id}.txt`);
      if (fs.existsSync(filePath)) {
        return fs.readFileSync(filePath, 'utf8');
      }
      return null;
    } else {
      // 生产环境：使用 Vercel KV
      return await kv.get(`paste:${id}`);
    }
  } catch (err) {
    console.error('getPaste error:', err);
    return null;
  }
}
