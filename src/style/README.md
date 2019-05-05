## 样式

- `app.less` 全局样式配置
- `vars.less` 样式变量配置，包含两个文字超出宽度显示省略号的 `mixins`

样式在 `.vue` 文件中的使用：

```vue
<style lang="less">
@import '~styles/vars.less';
</style>
