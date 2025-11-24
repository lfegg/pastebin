// 使用 Redis 进行持久化存储
let redis = null;
let redisInitialized = false;

// 动态导入 Redis
async function getRedis() {
  if (redisInitialized) return redis;
  
  redisInitialized = true;
  
  console.log('Checking Redis environment...');
  console.log('KV_REST_API_URL:', !!process.env.KV_REST_API_URL);
  console.log('REDIS_URL:', !!process.env.REDIS_URL);
  
  try {
    // Vercel Redis (原 KV) 使用相同的接口
    if (process.env.KV_REST_API_URL || process.env.REDIS_URL) {
      console.log('Importing @vercel/kv...');
      const redisModule = await import('@vercel/kv');
      redis = redisModule.kv;
      console.log('Redis loaded successfully');
      return redis;
    } else {
      console.log('No Redis environment variables found');
    }
  } catch (err) {
    console.error('Redis import error:', err);
  }
  
  return null;
}

export async function setPaste(id, content) {
  try {
    const redisInstance = await getRedis();
    
    if (redisInstance) {
      console.log('Setting paste:', id);
      await redisInstance.set(`paste:${id}`, content, { ex: 86400 * 7 }); // 7天过期
      console.log('Paste saved successfully');
      return true;
    }
    
    console.error('Redis not configured - data will not persist');
    return false;
  } catch (err) {
    console.error('setPaste error:', err);
    throw err;
  }
}

export async function getPaste(id) {
  try {
    const redisInstance = await getRedis();
    
    if (redisInstance) {
      console.log('Getting paste:', id);
      const content = await redisInstance.get(`paste:${id}`);
      console.log('Paste found:', !!content);
      return content;
    }
    
    console.log('Redis not available');
    return null;
  } catch (err) {
    console.error('getPaste error:', err);
    throw err;
  }
}
