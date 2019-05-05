## 工具库

### index.js

一些数字处理和类型判断

### promisify.js

将微信原生 `API` 转成 `promise` 使用方式


### request.js

封装 [Flyio](https://github.com/wendux/fly)，实例化接受四个参数：

- 接口域名（baseURL）
- 自定义 `headers`（ headers）
- 请求拦截（requestInterceptors），可选
- 响应拦截（responseInterceptors），可选

实例方法 `send` 接受两个参数：

- 接口路径（path）
- 接口配置信息（options）：方法（`method`）、QueryString（`params`）、Body（`body`）

> 如果某个接口路径不基于实例化的 `baseURL`，那么 `options` 可以传入其它 `baseURL`


使用：

```js
import Request from '@/utils/request';

const reuqest = new Reqeust({ baseURL: 'https://xxx' });

reuqest.send('/path-to-api', { methods: 'POST' });

```

### storage.js

使用 `promisify.js` 封装微信原生[存储API](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/storage.html)；