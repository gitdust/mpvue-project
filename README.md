# 基于 mpvue 的微信小程序前端工程

自己手动配置构建脚本，删减公司内部业务代码，保留核心功能。

请阅读完以下内容再使用。

如果觉得可以，请给个 `Star`。

## 0.目录结构

```js
/**

src
 |---components/ // 全局组件
 |---consts/ // 业务代码的一些枚举值
 |---lib/ // 对第三方库或原生 api 的二次封装
 |---mixin/ // 全局 mixin
 |---modules/ // 对 utils 工具的二次封装
 |---pages/ // 小程序的页面
 |     |---pageName // 页面名称（注意修改）
 |            |---components // 本页面的一些组件
 |            |---api.js // 本页面使用的 api
 |            |---index.vue // 本页面主文件
 |            |---main.js // 本页面入口文件
 |            |---main.json // 本页面配置文件
 |            |---mixin.js // 本页面 mixin
 |            |---store.js // 本页面的 store
 |---shared/ // 业务组件
 |---static/ // 静态资源，图片等
 |---store/ // rootStore
 |---style/ // 全局样式
 |---utils/ // 工具类库
 |---api.js // 全局接口
 |---app.json // 分包配置
 |---App.vue // 根页面
 |---config.js // 配置信息
 |---main.js // 工程如果文件

 */
```

> 进入每个一级目录，有详解

## 1.工程说明

### 1.0 分包

支持分包，只需在 `src/app.json` 中指定主包数组 `pages` 即可即可，构建时会将 `src/pages/` 中其它页面自动配置进分包 `subPackages` 字段中。

### 1.1 小程序版本更新提示

详见 `src/App.vue` 的 `onShow` 方法

### 1.1 接口请求

`src/utils/request.js`，默认 `GET` 方法，如果个别接口 `baseURL` 不同，可直接指定。

`src/modules/request.js`，配置 `请求拦截` 和 `响应拦截`。特别的，如果你有多个接口服务，返回多个实例即可（具体参看对应文件底部注释）。

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

### 1.4 vue-router

`src/modules/router.js`，并没有使用 `vue-router`，只是将 [微信原生路由 API](https://developers.weixin.qq.com/miniprogram/dev/api/wx.switchTab.html) 封装成 `vue-router` 的 `API` 调用方式，然后在 `src/main.js` 中挂载到 `Vue` 原型的 `$router` 属性上:

```js
Vue.prototype.$router = router;
```

`this.$router.push` 做了特殊处理：

- 因为官方限制页面栈为 10 个，当页面栈数量超过 6 个，则 `wx.redirectTo`，建议产品规划好页面跳转关系
- 当要前往的页面已经在页面栈时（不带参数），直接 `wx.navigateBack`

> tab 页跳转是单独的


***TO BE CONTINUED...***