import { createClient } from 'redis';

// Redis 客户端实例
let redis = null;

// 获取或创建 Redis 连接
async function getRedis() {
  if (redis) return redis;
  
  try {
    console.log('Creating Redis client...');
    redis = createClient({
      url: process.env.REDIS_URL || process.env.KV_URL
    });
    
    redis.on('error', (err) => console.error('Redis Client Error:', err));
    
    await redis.connect();
    console.log('Redis connected successfully');
    
    return redis;
  } catch (err) {
    console.error('Redis connection error:', err);
    redis = null;
    throw err;
  }
}

export async function setPaste(id, content) {
  try {
    const client = await getRedis();
    console.log('Setting paste:', id);
    await client.setEx(`paste:${id}`, 86400 * 7, content); // 7天过期
    console.log('Paste saved successfully');
    return true;
  } catch (err) {
    console.error('setPaste error:', err);
    throw err;
  }
}

export async function getPaste(id) {
  try {
    const client = await getRedis();
    console.log('Getting paste:', id);
    const content = await client.get(`paste:${id}`);
    console.log('Paste found:', !!content);
    return content;
  } catch (err) {
    console.error('getPaste error:', err);
    throw err;
  }
}
