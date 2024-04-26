# Linux的安装

在安装Linux时，一般不会选择双系统安装，而是使用虚拟机去虚拟一个Linux的系统出来。
在这里选择使用VMware来操作

## VMware下载和安装

### VMware下载

::: tip VMware
```html
<a href="https://www.vmware.com/products/workstation-pro/workstation-pro-evaluation.html">VMware下载地址</a>
```
:::

### VMware安装

选择Workstation xx Pro for Windows下载
正常安装即可，选择下一步，当需要选择下载位置时需要自己选择一下下载位置

剩下的直接傻瓜式安装即可

## Linux的镜像下载

一般来说，国内下载各种的软件时会非常的慢，这时可以使用国内的镜像源来下载更快一些

### 镜像源站

```html
<a href="https://mirrors.tuna.tsinghua.edu.cn/centos/">清华镜像源站</a>
<a href="https://developer.aliyun.com/mirror/">阿里镜像源站</a>
```
### 下载Linux的镜像源

这里咱们选择CentOS的7.版本的下载，这里自行操作即可

### 创建虚拟机

在VMware的主页面有一个创建新的虚拟机，一直点击下一步

当需要选择 安装客户机操作系统 的步骤时，选择稍后安装操作系统
选择版本时，需要选择Linux和CentOS 7 64位， 接下写入虚拟机的名称

选择处理器配置时，选择处理器数量 2 个， 每个处理器的内核 2 个
虚拟机的内存选择 4096 MB 即可

剩下的一直下一步即可，在指定磁盘空间时，可以多给一点，最少20G，个人建议开大一点
后面再次分配的话非常麻烦，其他配置不需要改变 一直点击下一步，然后完成操作

接下来，选择Linux的ISO文件，找到自己下载的CentOS文件即可

## 虚拟机的一些配置

点开虚拟机后，会需要输入Enter才可以进入系统，进入系统后，选择英文，如果选择中文，可能会导致很多不必要的问题存在

本地化界面，日期和时间选择 亚洲上海的时区

软件部分安装源选择 本地介质，在软件选择时选择GUI的服务器

系统部分点击进去之后直接点击完成即可，点击开始安装

网络和主机名需要更改主机名，以及打开ens33，点击应用，切换到本机电脑
使用cmd输入命令ipconfig，查看一下VMware Network Adapter VMnet8的ip地址
我们只需要把它的最后一个数字加1，然后打开配置页面，点开IPv4的配置，选择方法手动
Add，新增一个地址，ip地址就是本机VMware Network Adapter VMnet8的ip地址加1
子网掩码 255.255.255.0 网关则写入114.114.114.114

点击开始安装，然后设置root密码，root密码很重要，一定要记清楚，并且需要创建一个
用户创建用户和平常创建一个用户差不多，作为自己平常登入这个虚拟机的用户

等待安装完成，重启即可