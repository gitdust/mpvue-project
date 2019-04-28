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


### 1.注意事项

 - 设计稿请以 `宽750px` 为基准设计，否则请修改 `/scripts/webpack/base.js` 中 `px2rpx-loader` 的 `options`

 - 已添加小程序版本更新提示，详见 `src/App.vue` 的 `onShow` 方法

***TO BE CONTINUED...***