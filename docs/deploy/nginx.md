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

Nginx 是一个中间人，站在用户和服务器之间。当用户想要访问一个网站或者服务时，他们会先遇到这个中间人 Nginx。用户会告诉 Nginx 他们想要访问什么，然后Nginx代替用户去访问，最后再把信息传递给用户。这个过程中，用户其实并不直接和最终的服务器进行交互，一切都是通过Nginx这个中间人完成的。

![反向代理.png](https://ywdoc-1306153177.cos.ap-shanghai.myqcloud.com/2024/04/26/662b19e6a92ae.png)

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

重定向：网页或请求的自动跳转，将用户从一个地址引导到另一个地址。

![重定向.png](https://ywdoc-1306153177.cos.ap-shanghai.myqcloud.com/2024/04/26/662b1b141632f.png)

:::tip 重定向与反向代理区别
重定向改变浏览器地址，用户知道跳转。

反向代理不改变地址，对用户透明，背后服务器交换数据。
:::


重定向分类：

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

### 什么是跨域问题

浏览器为了用户的安全，仅允许向 **同域名、同端口** 的服务器发送请求。

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
