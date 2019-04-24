import promisify from '@/utils/promisify';

/**
 * 授权
 * https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/authorize.html
 */

const SCOPE_MAP = {
  'scope.userInfo': {
    name: 'getUserInfo',
    options: {
      lang: 'zh_CN',
    },
  },
  'scope.userLocation': {
    name: null,
    options: {},
  },
  'scope.address': {
    name: null,
    options: {},
  },
  'scope.invoiceTitle': {
    name: null,
    options: {},
  },
  'scope.invoice': {
    name: null,
    options: {},
  },
  'scope.werun': {
    name: null,
    options: {},
  },
  'scope.record': {
    name: null,
    options: {},
  },
  'scope.writePhotosAlbum': {
    name: null,
    options: {},
  },
  'scope.camera': {
    name: null,
    options: {},
  },
};

const wxAuthorize = async (scope) => {
  let result = false;
  let res;
  try {
    const { authSetting } = await promisify(wx.getSetting);
    result = authSetting[scope];

    if (result) {
      // 已授权
      const wxApi = SCOPE_MAP[scope]; // 授权信息对应的授权方法
      if (result && wxApi) {
        res = await promisify(wx[wxApi.name], wxApi.options);
      }
      return { result, res };
    }

    // 未授权
    const res1 = await promisify(wx.authorize, { scope });
    result = res1.errMsg === 'authorize:ok';
    return { result };
  } catch (error) {
    console.log(error);
    return { result };
  }
};

// 保存图片和视频
const writePhotosAlbum = () => wxAuthorize('scope.writePhotosAlbum');

// 用户信息
const userInfo = async () => wxAuthorize('scope.userInfo');

export default {
  writePhotosAlbum,
  userInfo,
};
