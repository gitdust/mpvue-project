import storage from '@/utils/storage';

// 出错一律返回 null
const getHandler = key => storage.get(key).then(res => res.data).catch(() => null);

/**
 * 示例
 * const setUserId = userId => storage.set('user_id', userId);
 * const getUserId = () => getHandler('user_id');
 */

export default {
};
