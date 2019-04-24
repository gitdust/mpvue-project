/**
 * 埋点，原生 api 上报
 * https://developers.weixin.qq.com/miniprogram/dev/api/wx.reportAnalytics.html?search-key=reportAnalytics
 */

import { ENV } from '@/config';

// 公共参数
const CONCAT_BASE = payload => Object.assign({ env: ENV }, payload);

// 按钮点击
const buttonClick = timestamp => wx.reportAnalytics('button_click', CONCAT_BASE({ timestamp }));

export default {
  buttonClick,
};
