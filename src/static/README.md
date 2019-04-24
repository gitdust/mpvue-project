### 静态资源

图片等静态资源影响主包大小，构建只会将 `CSS` 中使用的图片（`< 30000 byte`） 编码成 `base64` 格式，其它图片建议 `CDN`。

图片在 `template` 的使用（建议 `CDN`）：

```html
<img src="/static/logo.png">
```

图片在 `CSS` 中的使用（大图建议 `CDN`）：

```css
div {
  background: url(../static/logo.png);
}
```

> 目前只能使用相对路径，没找到使用绝对路径的配置方法
