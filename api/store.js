// 使用 Redis 进行持久化存储
let redis = null;

// 动态导入 Redis
async function getRedis() {
  if (redis !== null) return redis;
  
  try {
    // Vercel Redis (原 KV) 使用相同的接口
    if (process.env.KV_REST_API_URL || process.env.REDIS_URL) {
      const redisModule = await import('@vercel/kv');
      redis = redisModule.kv;
      return redis;
    }
  } catch (err) {
    console.error('Redis not available:', err.message);
  }
  
  redis = false; // 标记为不可用
  return null;
}

export async function setPaste(id, content) {
  const redisInstance = await getRedis();
  
  if (redisInstance) {
    try {
      await redisInstance.set(`paste:${id}`, content, { ex: 86400 * 7 }); // 7天过期
      return true;
    } catch (err) {
      console.error('setPaste error:', err);
      return false;
    }
  }
  
  console.error('Redis not configured - data will not persist');
  return false;
}

export async function getPaste(id) {
  const redisInstance = await getRedis();
  
  if (redisInstance) {
    try {
      return await redisInstance.get(`paste:${id}`);
    } catch (err) {
      console.error('getPaste error:', err);
      return null;
    }
  }
  
  return null;
}
