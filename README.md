# 基于 mpvue 的微信小程序前端工程

自己手动配置构建脚本，删减公司内部业务代码，保留核心功能。

请阅读完以下内容再使用。

如果觉得可以，请给个 `Star`。

## 0 目录结构

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

> 进入 `src` 的每个一级目录，有目录和文件详解


## 1 注意事项

 - 设计稿请以 `宽750px` 为基准设计，否则请修改 `/scripts/webpack/base.js` 中 `px2rpx-loader` 的 `options`

 - 已添加小程序版本更新提示，详见 `src/App.vue` 的 `onShow` 方法

 - 部分方法已经添加至 `Vue.prototype` 上，详见 `src/main.js`

 - 处理了运行时代码错误和 `promise` 错误无法在控制台提示的问题


## 2 使用

- `clone` 本项目，安装 `package`，不多说
- `app.json` 中除了 `subPackages` 字段，配置其它一些需要配置的。特别的，`pages` 字段填写主包页面
- 我配置了 4 个环境，对应的启动命令为 `npm run dev/test/qa/pro`，对应 `config` 中接口地址，自行调整
- 启动微信开发者工具，填写你的 `AppID`，导入项目，选择 `dist` 目录即可

> 新增图片、组件，新引入组件，或者其它一些没生效的，请重新运行启动命令。

***TO BE CONTINUED...***