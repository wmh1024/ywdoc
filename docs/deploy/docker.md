# Docker

## 安装 Docker

### CentOS

#### 操作系统要求

若要安装 Docker 引擎，需要以下项之一的维护版本 CentOS 版本：

- CentOS 7 
- CentOS 8 （stream）
- CentOS 9 （stream）

#### 卸载旧版本

```shell
sudo yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-engine
```

#### 安装方法

##### 使用rpm存储库安装

设置存储库

安装软件包（提供实用程序）并设置存储库。`yum-utils``yum-config-manager`

```shell
#安装Docker所需要的一些工具包
sudo yum install -y yum-utils
#建立Docker仓库地址（映射仓库地址）
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
```

安装Docker引擎

1.安装 Docker Engine、containerd 和 Docker Compose：

最新版本：

```shell
sudo yum install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

2.启动Docker

```shell
sudo systemctl start docker
```

3.通过运行映像来验证 Docker 引擎安装是否成功。`hello-world`

```shell
sudo docker run hello-world
```

此命令下载测试映像并在容器中运行它。当 容器运行，它打印确认消息并退出。

现在，您已成功安装并启动 Docker 引擎。

### Ubuntu

#### 操作系统要求

要安装 Docker 引擎，您需要以下 Ubuntu 之一的 64 位版本 版本：

- Ubuntu Mantic 23.10
- Ubuntu Jammy 22.04 （LTS）
- Ubuntu Focal 20.04 （LTS）

#### 卸载旧版本

再安装Docker引擎之前，需要卸载任何冲突的包

要卸载的非官方软件包有：

- `docker.io`
- `docker-compose`
- `docker-compose-v2`
- `docker-doc`
- `podman-docker`

运行以下命令以卸载所有冲突的包：

```shell
for pkg in docker.io docker-doc docker-compose docker-compose-v2 podman-docker containerd runc; do sudo apt-get remove $pkg; done
```

#### 安装方法

##### 使用apt存储库安装

1.设置Docker的存储库

```shell
# 添加Docker的官方GPG密钥:
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# 将存储库添加到apt源:
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
```

2.安装Docker包

最新版本：

```shell
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

3.通过运行映像来验证 Docker 引擎安装是否成功。`hello-world`

```shell
sudo docker run hello-world
```

此命令下载测试映像并在容器中运行它。当 容器运行，它打印确认消息并退出。

现在，您已成功安装并启动 Docker 引擎。

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


## Docker Compose

Docker Compose：通过一个模板文件来定义一组相关联的应用容器，实现多个相互关联的Docker容器的快速部署。

一键部署指令：

```shell
# 启动所有, -d 参数是后台启动
docker compose up -d
```
