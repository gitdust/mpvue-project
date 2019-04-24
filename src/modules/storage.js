import storage from '@/utils/storage';

// 出错一律返回 null
const getHandler = key => storage.get(key).then(res => res.data).catch(() => null);

const setStoreId = storeId => storage.set('store_id', storeId);
const getStoreId = () => getHandler('store_id');

export default {
  setStoreId,
  getStoreId,
};
