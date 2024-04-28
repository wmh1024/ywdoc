# 八、系统管理

## 8.1 防火墙操作

```
  service iptables status      //查看iptables服务的状态
  service iptables start       //开启iptables服务
  service iptables stop        //停止iptables服务
  service iptables restart     //重启iptables服务
  chkconfig iptables off       //关闭iptables服务的开机自启动
  chkconfig iptables on        //开启iptables服务的开机自启动
  ##centos7 防火墙操作
  systemctl status firewalld.service     //查看防火墙状态
  systemctl stop firewalld.service       //关闭运行的防火墙
  systemctl disable firewalld.service    //永久禁止防火墙服务

```

## 8.2 修改主机名（CentOS 7）

```
  hostnamectl set-hostname 主机名
```

## 8.3 查看网络

```
  ifconfig

```

## 8.4 修改IP

```
  修改网络配置文件，文件地址：/etc/sysconfig/network-scripts/ifcfg-eth0
  ------------------------------------------------
  主要修改以下配置：  
  TYPE=Ethernet               //网络类型
  BOOTPROTO=static            //静态IP
  DEVICE=ens00                //网卡名
  IPADDR=192.168.1.100        //设置的IP
  NETMASK=255.255.255.0       //子网掩码
  GATEWAY=192.168.1.1         //网关
  DNS1=192.168.1.1            //DNS
  DNS2=8.8.8.8                //备用DNS
  ONBOOT=yes                  //系统启动时启动此设置
  -------------------------------------------------
  修改保存以后使用命令重启网卡：service network restart

```

## 8.5 配置映射

```
  修改文件： vi /etc/hosts
  在文件最后添加映射地址，示例如下：
   192.168.1.101  node1
   192.168.1.102  node2
   192.168.1.103  node3
  配置好以后保存退出，输入命令：ping node1 ，可见实际 ping 的是 192.168.1.101。

```

## 8.6 查看进程

```
  ps -ef         //查看所有正在运行的进程

```

## 8.7 结束进程

```
  kill pid       //杀死该pid的进程
  kill -9 pid    //强制杀死该进程   

```

## 8.8 查看链接

```
  ping IP        //查看与此IP地址的连接情况
  netstat -an    //查看当前系统端口
  netstat -an | grep 8080     //查看指定端口

```

## 8.9 快速清屏

```
  ctrl+l        //清屏，往上翻可以查看历史操作

```

## 8.10 远程主机

```
  ssh IP       //远程主机，需要输入用户名和密码

```

