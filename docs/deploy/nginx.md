# Nginx

## Nginx简介

Nginx是一个反向代理的web服务器，可以提供反向代理和处理高并发问题的能力，支持热部署，启动简单

### 正向代理

正向代理就是可以帮助我们去访问一些网站，并且将访问得到的内容返回给自己的电脑，例如 VPN等



### 反向代理

在服务器端部署一个代理服务器，当有人去访问服务器的时候，代理服务器会帮忙转发请求 例如 Nginx等

## Nginx安装 Linux版

1.获取源码，在Nginx的官网，找到nginx-版本号.tar.gz，下载好之后，将源码放在Linux虚拟机中，使用tar命令解压缩，

```shell
tar -xzvf nginx-版本号.tar.gz
```

2.使用./configure和make来编译源码

```sjell
./configure # 在解压之后的文件夹下
make && make install #进行源码的编译和安装
# 如果没有make 可以使用sudo apt intsall 进行安装
```

3.查看nginx是否正确安装

一般下载好之后都在/usr/local/nginx中，可以切换到那个文件中，这时候，需要关注三个文件夹

第一个是 conf 文件夹，后面会在conf下的nginx.conf文件中进行修改

第二个是 html文件夹，会在其中防止静态资源

第三个是 sbin文件夹，启动nginx需要在该文件夹下启动

```shell
# 输入以下命令
cd sbin
./nginx
# 然后切换到虚拟机的浏览器 输入localhost:80 可以看到welcome to nginx ，证明下载成功
# 如果没有浏览器可以在终端中输入 curl http://localhost:80 会输出页面的html，只要看到welcome to nginx 就算成功
```



## Nginx的基础使用

### Nginx的命令

在Linux Shell中输入nginx，即可启动，如果信息弹出，那就是启动成功，如果有报错，百度一下就好了

在Shell中输入nginx -s 加上后缀

| quit     | stop     | reload       | reopen           |
| -------- | -------- | ------------ | ---------------- |
| 正常关闭 | 立即关闭 | 重新配置文件 | 重新打开日志文件 |

ps aux | grep nginx 查看nginx的进程

### 查看Nginx的开启服务  查看对应端口的使用情况

在Shell中 ps -ef | gref nginx

在Shell中 lsof -i:80 查看80端口占用情况

### Nginx的信息查看  配置文件路径

在Shell中输入 nginx -v 只查看版本信息

在Shell中输入 nginx -V 查看所有信息，在信息中找到 --conf-path= 后面的内容，找到配置文件

或者使用nginx -t对配置文件进行验证，并且有路径的输出

### Nginx的负载均衡

Nginx的负载均衡有两种 内置策略和扩展策略

#### 内置策略

轮询，加权轮询，Ip Hash

轮询 设置两个代理服务器，假如1号服务器和2号服务器的性能相近，那么他们之间可以进行轮询

加权轮询 如果1号服务器比2号服务器的性能好，那么可以对其进行加权，让1号服务器的加权高于2号服务器的加权，可以让大部分的访问到1号服务器上

### Nginx的nginx.conf


```nginx
# http协议下的配置
# 监听 8088 端口，将接到8088端口转到 8001端口上，完成反向代理
http {
	server {
        listen       8088;
        server_name localhost;
        location /{
            proxy_pass http://localhost:8001;
        }
    }
}
```


写一个show.html，放在html目录下，然后在nginx.conf的http块中写入

```nginx
server{
    listen 8083;
	server_name localhost;
	location / { 
		root html;
		index show.html;
	}
}
```

这时候访问本机的8083端口就可以看到show.html，证明静态资源部署完成了

### 轮询和权值 (负载均衡)

```nginx
upstream myserver{
    server localhost:8088;
    server localhost:8083;
}

server{
    listen 8004;
    server_name localhost;
    location / {
        proxy_pass http://myserver;
    }
}
```

让http://myserver监听8004端口，并且转发到8088或者8083，这里没有设置权值也就是轮着来访问这两个页面

如果其中的一个服务器性能较强，可以设置权值来增加它的访问量

```nginx
upstream myserver{
    server localhost:8088 weight=10;
    server localhost:8083 weight=2;
}

server{
    listen 8004;
    server_name localhost;
    location / {
        proxy_pass http://myserver;
    }
}
```



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
