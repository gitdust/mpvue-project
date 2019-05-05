## 页面结构

```js
/**

  pageName // 页面名称（注意修改）
     |---components/ // 本页面的一些组件
     |---api.js // 本页面使用的 api
     |---index.vue // 本页面主文件
     |---main.js // 本页面入口文件
     |---main.json // 本页面配置文件
     |---mixin.js // 本页面 mixin
     |---store.js // 本页面的 store

 */
```

页面的配置在 `main.json` 中。

特别的，如果你遇到了 `mpvue` 多个页面公用一个 `vm` 的问题，请将 `main.js` 内容改成：

```js

import pageFactory from 'mpvue-page-factory';
import App from './index.vue';

Page(pageFactory(App));

```

