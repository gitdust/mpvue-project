import promisify from '@/utils/promisify';

/**
 * 界面 API
 * https://developers.weixin.qq.com/miniprogram/dev/api/api-react.html
 */
const showToast = title => wx.showToast({ title, icon: 'none' });

const showLoading = (title = '') => {
  wx.showLoading({ title });
  wx.showNavigationBarLoading();
};

const hideLoading = () => {
  wx.hideLoading();
  wx.hideNavigationBarLoading();
};

const showModal = (options) => {
  const defaultOptions = {
    cancelText: '取消',
    confirmText: '确定',
  };
  return promisify(wx.showModal, Object.assign(defaultOptions, options));
};

export default {
  showToast,
  showLoading,
  hideLoading,
  showModal,
};
