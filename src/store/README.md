## 全局 store

我为这块内容制订了一些命名规范，仅供参考：

- 全局 `mutation` 以 `gm_${页面目录名大写}`（global mutation）开头，页面级以 `lm_${页面目录名大写}`（local mutation）开头，后面全大写字母，单词间用 `_` 分割
- 全局 `action` 以 `ga_${页面目录名大写}`（global action）开头，页面级以 `la_${页面目录名大写}`（local action）开头，后面全大写字母，单词间用 `_` 分割

如:

```js
import home from '@/pages/Home/store';

const store = new Vuex.Store({
  state: {
    loading: true,
  },
  modules: {
    home,
  },
  mutations: {
    gm_SET_LOADING(state, loading) {
      state.loading = loading;
    }
  },
  actions: {
    ga_SET_LOADING({ commit }, loading) {
      commit('gm_SET_LOADING', loading);
    },
  },
});
```

而每个页面都有自己的 `store`，我本想通过 `webpack` 的 `require.context` 完成页面 `store` 的自动引入：

```js
const requireContext = require.context('@/pages', true, /^\.\/((?!\/)[\s\S])+\/routes.js$/);
```

但是语法报错，应该是配置出错。所以，目前只支持手动引入页面 `store`，添加至 `modules` 字段中，如上例中的 `home`。

> 已经在 `src/main.js` 中挂载至 `Vue.prototype.$store` 属性上
