# 二、基础操作

## 2.1 关闭系统

```
(1)立刻关机
  shutdown -h now 或者 poweroff
(2)两分钟后关机
  shutdown -h 2
```

## 2.2 关闭重启

```
(1)立刻重启
  shutdown -r now 或者 reboot
(2)两分钟后重启
  shutdown -r 2 
```

## 2.3 帮助命令（help）

```
  ifconfig  --help     //查看 ifconfig 命令的用法
```

## 2.4 命令说明书（man）

```
  man shutdown         //打开命令说明后，可按"q"键退出
```

## 2.5 切换用户（su）

```
  su xxx               //切换为用户"xxx",输入后回车需要输入该用户的密码
  exit                 //退出当前用户
```
