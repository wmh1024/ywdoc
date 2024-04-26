# Nginx

## Vue 项目

### Vue项目打包

:::tip 未安装 Node.js 和 npm?
前往：安装npm
:::

使用 npm 安装相关依赖

```shell
npm install
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


## 反向代理

### 什么是反向代理

// todo

### 反向代理配置

```nginx
location ^~ / {
    add_header Access-Control-Allow-Origin *;
    add_header Access-Control-Allow-Methods "GET, POST, PUT, DELETE, OPTIONS";
    add_header Access-Control-Allow-Headers "Content-Type, Authorization";
    proxy_pass https://ywdoc.cn;
}
```

## 重定向

### 什么是重定向

* 301 永久性重定向：永久移动到新的URL上，搜索引擎会更新索引。
* 302 临时性重定向：暂时移动到新的URL上，搜索引擎不会更新索引。

### 重定向配置

301 永久性重定向

```nginx
if ($host ~ '^123.com'){
    return 301 https://ywdoc.cn;
}
```

302 临时性重定向

```nginx
if ($host ~ '^123.com'){
    return 302 https://ywdoc.cn;
}
```
## 跨域

### 配置允许跨域

```nginx
location ^~ /api/ {
    proxy_pass http://127.0.0.1:8080/api/;
    add_header 'Access-Control-Allow-Origin' $http_origin;
    add_header 'Access-Control-Allow-Credentials' 'true';
    add_header Access-Control-Allow-Methods 'GET, POST, OPTIONS';
    add_header Access-Control-Allow-Headers '*';
    if ($request_method = 'OPTIONS') {
        add_header 'Access-Control-Allow-Credentials' 'true';
        add_header 'Access-Control-Allow-Origin' $http_origin;
        add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
        add_header 'Access-Control-Allow-Headers' 'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range';
        add_header 'Access-Control-Max-Age' 1728000;
        add_header 'Content-Type' 'text/plain; charset=utf-8';
        add_header 'Content-Length' 0;
        return 204;
    }
}
```
