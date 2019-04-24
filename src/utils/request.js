// https://github.com/wendux/fly
import Flyio from 'flyio/dist/npm/wx.js';

// 默认请求拦截
const defaultRequestInterceptors = request => request;

// 默认响应拦截
const defaultResponseInterceptors = {
  response: response => response,
  error: error => console.log('default error', error),
};

class Reqeust {
  constructor(options) {
    this.options = options;

    this.defaultConfig = {
      baseURL: options.baseURL, // base url
      // timeout: 3000, // timeout milliseconds
      headers: options.headers,
    };

    this.fly = new Flyio(); // 请求实例

    const requestInterceptors = options.requestInterceptors || defaultRequestInterceptors;
    const successHandler = options.responseInterceptors.response || defaultResponseInterceptors.response; // 响应正确
    const errorHandler = options.responseInterceptors.error || defaultResponseInterceptors.error; // 响应错误

    this.fly.interceptors.request.use(requestInterceptors);
    this.fly.interceptors.response.use(successHandler, errorHandler);
  }
  // 请求方法
  send(path, options = {}) {
    const config = Object.assign({}, this.defaultConfig);

    config.baseURL = options.baseURL || this.options.baseURL;
    config.method = options.method || 'GET';
    config.params = options.params || {};
    return this.fly.request(path, options.data, config).then(response => response.data);
  }
}

export default Reqeust;
