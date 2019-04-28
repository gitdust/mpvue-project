## request.js

请配置 `请求拦截（requestInterceptors）` 和 `响应拦截（responseInterceptors）` 处理事件函数。特别的，如果你有多个接口服务，返回多个实例即可（具体参看对应文件底部注释）。

使用：

```js
import request from '@/modules/request';

const apiName = request.send('/path-to-api', {
  baseURL: ''https://yyy',
  method: 'POST',
  data: {},
  params: {},
})
```

## router.js

将 [微信原生路由 API](https://developers.weixin.qq.com/miniprogram/dev/api/wx.switchTab.html) 封装成 `vue-router` 的 `API` 调用方式，然后在 `src/main.js` 中挂载到 `Vue` 原型的 `$router` 属性上:

```js
Vue.prototype.$router = router;
```

`this.$router.push` 做了特殊处理：

- 因为官方限制页面栈为 10 个，当页面栈数量超过 6 个，则 `wx.redirectTo`，建议产品规划好页面跳转关系
- 当要前往的页面已经在页面栈时（不带参数），直接 `wx.navigateBack`

> tab 页跳转是单独的


## storage.js

对 `src/utils/storage` 的二次封装，解耦代码。统一了 `get` 出错返回值。

## wx.js

对原生 `API` 的二次封装，减少多余代码的输入，也支持自定义参数。

## wxAuthorize

判断某个权限用户是否已经授权，返回格式：

```js
/**
 * {
 *  result, // 是否已授权，true/false
 *  res, // 如果该权限有对应的获取内容 api，则为 api 返回内容
 * }
 */

// 示例
// result 为用户是否已经授权获取信息
// res 为对应 wx.getUserInfo 接口返回的内容
const { result, res } = await wxAuthorize.userInfo();
```