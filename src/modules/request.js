
import Request from '@/utils/request';
import { END_POINT } from '@/config';

// 请求拦截
const requestInterceptors = (request) => {
  // 添加自定义的一些 http 请求参数等
  // TODO:implement

  return request;
};

// 响应拦截
const responseInterceptors = {
  response: (response) => {
    // 可能是下拉刷新调用接口，那么直接停止下拉刷新动画
    wx.stopPullDownRefresh();

    // 判断 api 返回内容进行异常提示或错误上报等
    // TODO:implement
    return response;
  },
  error: (error) => {
    wx.stopPullDownRefresh();

    // 错误提示和上报等
    // TODO:implement

    const { status, message } = error;

    if (status === 0) {
      // 网络异常
      // TODO:implement
    }

    if (status !== 200) {
      // 请求异常
      // TODO:implement
    }

    if (message.indexOf('timeout') > -1) {
      // 请求超时
      // TODO:implement
    }

    throw new Error(error);
  },
};

const request = new Request({
  baseURL: END_POINT,
  requestInterceptors,
  responseInterceptors,
});

export default request;


/**
 * 多个接口服务
 *
 * const requestInterceptors_1 = request => request;
 * const responseInterceptors_1 = {
 *   response: response => response,
 *   error: error => consolo.log('error_1', error),
 * };
 * const request_1 = new Request({
 *   baseURL: END_POINT_1,
 *   requestInterceptors_1,
 *   responseInterceptors_1,
 * })
 *
 * const requestInterceptors_2 = request => request;
 * const responseInterceptors_2 = {
 *   response: response => response
 *   error: error => consolo.log('error_2', error),
 * };
 * const request_2 = new Request({
 *   baseURL: END_POINT_2,
 *   requestInterceptors_2,
 *   responseInterceptor_2,
 * })
 *
 * export default {
 *   request_1,
 *   request_2,
 * }
 */
