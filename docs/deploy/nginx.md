# Nginx

## Vue 项目

### Vue项目打包

:::tip 未安装 Node.js 和 npm?
前往：安装npm
:::

使用 npm 安装相关依赖

```shell
npm install
yarn
```

将项目打包

```shell
npm run build
```

打包完成后会在根目录生成 `dist` 文件夹，上传到服务器部署。

### Vue 的 history 路由问题

Vue使用 history 模式路由（/login），会导致404错误。

原因分析：路由是 javascript 实现的，并真实不存在 `/login/index.html` 的路径或文件

解决方法：修改 Nginx 的配置

```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```
