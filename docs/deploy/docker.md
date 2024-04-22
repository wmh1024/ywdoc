# Docker

## 安装 Docker

### yum安装

```shell
yum -y install yum-utils device-mapper-persistent-data lvm2
yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
yum makecache fast
yum -y install docker-ce
```

### 更换国内镜像源

创建 `daemon.json` 文件

```shell
touch /etc/docker/daemon.json
```

打开并添加镜像源

```shell
vim /etc/docker/daemon.json
```

```json
{
    "registry-mirrors" : [
    "https://registry.docker-cn.com",
    "http://hub-mirror.c.163.com",
    "https://docker.mirrors.ustc.edu.cn",
    "https://cr.console.aliyun.com",
    "https://mirror.ccs.tencentyun.com"
  ]
}
```
::: tip vim 保存并退出
1. 先按下 `Esc`，输入 `:wq!`。
2. 先按下 `Esc`，再按住 `Shift` 后，按两次 `z` 。
:::

重启 Docker 服务

```shell
systemctl daemon-reload
systemstl restart docker.service
```

## Docker 常用命令

```shell
# 杀死容器
docker kill [container-id]

# 强制删除镜像
docker rmi -f [container-id]

# 查看进程
docker ps

# 进入容器
docker exec -i -t [container-id] /bin/bash

# 查看日志
docker logs -f [container-id]
```

## 制作 Docker 镜像

### Dockerfile

Dockerfile：构建Docker镜像的脚本化指令集。

::: tip 提示
Dockerfile 一般情况下不需要完全从 0 自己写，建议去 github、gitee 等托管平台参考同类项目
:::

Dockerfile 的命令：

* `FROM` 依赖的基础镜像
* `WORKDIR` 工作目录
* `COPY` 从本机复制文件
* `RUN` 执行命令
* `CMD / ENTRYPOINT 附加额外参数` 指定运行容器时默认执行的命令

### Dockerfile 示例
 <br/>

#### SpringBoot 后端

dockerfile：

```dockerfile
FROM maven:3.5-jdk-8-alpine as builder

WORKDIR /app
COPY pom.xml .
COPY src ./src

RUN mvn package -DskipTests

CMD ["java","-jar","/app/target/backendT.jar","--spring.profiles.active=prod"]
```

#### 前端

dockerfile：

```dockerfile
FROM nginx

WORKDIR /usr/share/nginx/html/
USER root

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

COPY ./dist  /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```

nginx.conf：

```nginx
server {
    listen 80;

    # gzip config
    gzip on;
    gzip_min_length 1k;
    gzip_comp_level 9;
    gzip_types text/plain text/css text/javascript application/json application/javascript application/x-javascript application/xml;
    gzip_vary on;
    gzip_disable "MSIE [1-6]\.";

    root /usr/share/nginx/html;
    include /etc/nginx/mime.types;
    # history 模式
    location / {
        try_files $uri /index.html;
    }
}
```

### 根据 Dockerfile 制作镜像

```shell
docker build -t user-backend:v0.0.1 .
```
* `docker build` : Docker 命令，用于构建镜像。 
* `-t user-backend:v0.0.1` : 指定构建的镜像的名称和标签。 
* `.` : 指定 Dockerfile 所在的路径，这里是当前目录。

## 启动 Docker 容器

::: tip 虚拟化
1. 端口映射：把本机的资源（实际访问地址）和容器内部的资源（应用启动端口）进行关联
2. 目录映射：把本机的端口和容器应用的端口进行关联
:::

### 前端、后端

```shell
# 前端
docker run -p 80:80 -d user-frontend:v0.0.1

# 后端
docker run -p 8080:8080 -d user-backend:v0.0.1
```
* `-p 8080:8080` 是指定容器的端口映射，将容器内部的端口 8080 映射到宿主机的端口 8080。
* `-d` 是指定容器在后台运行（detached 模式）。
* `user-backend:v0.0.1` 是指定要运行的镜像名称和标签。

### MySQL

```shell
docker run -d \						
  --name mysql \					
  -p 3306:3306 \ 					
  -e TZ=Asia/Shanghai \
  -e MYSQL_ROOT_PASSWORD=123 \
  mysql
```
* `-d` 是指定容器在后台运行（detached 模式）。
* `--name mysql` 是指定容器的名称为 mysql。
* `-p 3306:3306` 是指定容器的端口映射，将容器内部的端口 3306 映射到宿主机的端口 3306。
* `-e TZ=Asia/Shanghai` 是设置容器的时区为亚洲/上海。
* `-e MYSQL_ROOT_PASSWORD=123` 是设置 MySQL 数据库的 root 用户的密码为 123。
* `mysql` 是指定要运行的镜像名称。

## Docker 相关配置

设置 Docker 服务自启动

```shell
systemctl enable docker.service
```

设置 Docker 容器自启动

```shell
docker update --restart=always [container-id]
```

## Docker Compose

Docker Compose：通过一个模板文件来定义一组相关联的应用容器，实现多个相互关联的Docker容器的快速部署。

一键部署指令：

```shell
# 启动所有, -d 参数是后台启动
docker compose up -d
```
