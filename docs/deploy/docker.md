# Docker

## 安装 Docker

### CentOS

:::warning 操作系统要求
CentOS 7 及以上版本
:::

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

<br/>

##### 使用rpm存储库安装

1. 安装Docker所需要的工具包

```shell
sudo yum install -y yum-utils
```

2. 配置Docker仓库地址

```shell
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
```

3. 安装 Docker Engine、containerd 和 Docker Compose

```shell
sudo yum install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

4. 启动Docker

```shell
sudo systemctl start docker
```

5. 测试是否安装成功

```shell
sudo docker run hello-world
```


### Ubuntu

:::warning 操作系统要求
Ubuntu 20.04 及以上版本
:::

#### 卸载旧版本

卸载所有冲突的包

```shell
for pkg in docker.io docker-doc docker-compose docker-compose-v2 podman-docker containerd runc; do sudo apt-get remove $pkg; done
```

#### 安装方法

<br/>

##### 使用apt存储库安装

1. 设置Docker的存储库，添加Docker的官方GPG密钥

```shell
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc
```

2. 将存储库添加到apt源


```shell
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
```

3. 安装Docker包

```shell
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

4. 测试是否安装成功

```shell
sudo docker run hello-world
```

## Docker 常用命令

```shell
# 关闭容器
docker kill [container-id]

# 强制删除镜像
docker rmi -f [image-id]

# 查看正在运行的进程
docker ps

# 查看所有进程
docker ps -a

# 进入容器
docker exec -i -t [container-id] /bin/bash

# 查看日志
docker logs -f [container-id]
```

## 制作 Docker 镜像

### Dockerfile

Dockerfile：用于构建Docker镜像的脚本指令。

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

```dockerfile
FROM maven:3.5-jdk-8-alpine as builder

WORKDIR /app
COPY pom.xml .
COPY src ./src

RUN mvn package -DskipTests

CMD ["java","-jar","/app/target/backendT.jar","--spring.profiles.active=prod"]
```

#### 前端

```dockerfile
FROM nginx

WORKDIR /usr/share/nginx/html/
USER root

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

COPY ./dist  /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```


::: details nginx.conf：

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

:::

### 使用 Dockerfile 制作镜像

```shell
docker build -t user-backend:v0.0.1 .
```
* `docker build` : Docker 命令，用于构建镜像。 
* `-t user-backend:v0.0.1` : 指定构建的镜像的名称和标签。 
* `.` : 指定 Dockerfile 所在的路径，这里是当前目录。

## 启动 Docker 容器

::: tip 虚拟化
1. 目录映射：把本机的资源（实际访问地址）和容器内部的资源（应用启动端口）进行关联
2. 端口映射：把本机的端口和容器应用的端口进行关联
:::

### 前后端示例

```shell
# 前端
docker run -p 80:80 -d user-frontend:v0.0.1

# 后端
docker run -p 8080:8080 -d user-backend:v0.0.1
```
* `-p 8080:8080` 是指定容器的端口映射，将容器内部的端口 8080 映射到宿主机的端口 8080。
* `-d` 是指定容器在后台运行（detached 模式）。
* `user-backend:v0.0.1` 是指定要运行的镜像名称和标签。

### 常用镜像

<br/>

#### MySQL 5.7

```shell
sudo docker run --restart=always \
                -p 3306:3306 --name mysql \
                -v /mydata/mysql/log:/var/log/mysql \
                -v /mydata/mysql/data:/var/lib/mysql \
                -v /mydata/mysql/conf:/etc/mysql \
                -e MYSQL_ROOT_PASSWORD=123 \
                -d mysql:5.7
```

#### MySQL

```shell
sudo docker run --restart=always \
                -p 3306:3306 --name mysql \
                -v /mydata/mysql/log:/var/log/mysql \
                -v /mydata/mysql/data:/var/lib/mysql \
                -v /mydata/mysql/conf:/etc/mysql \
                -e MYSQL_ROOT_PASSWORD=root \
                -d mysql:latest
```

#### Redis

```shell
sudo docker run --restart=always \
                -p 6379:6379 \
                --name redis \
                --requirepass 123 \
                -d redis:latest
```

#### RabbitMQ

```shell
sudo docker run --restart=always \
                -e RABBITMQ_DEFAULT_USER=admin \
                -e RABBITMQ_DEFAULT_PASS=admin \
                --name RabbitMQ \
                --hostname mq \
                -p 15672:15672 \
                -p 5672:5672 \
                -d rabbitmq:3-management
```


## Docker 相关配置

### 开机自启

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
