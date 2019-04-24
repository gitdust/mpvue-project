### 全局 mixin

我为这块内容制订了一些命名规范，仅供参考：

- 全局 `computed` 以 `gc`（global computed）开头，驼峰命名法
- 全局 `methods` 以 `gm`（global methods）开头，驼峰命名法

如:

```js
export default {
  computed: {
    gcLoading() {
      return this.$store.state.loading;
    }
  },
  methods: {
    gmSetTitle() {
      // implement
    },
  },
};
```

> 已经在 `src/main.js` 中引入
