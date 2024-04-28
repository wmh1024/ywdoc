# 七、其他常用命令

## 7.1 find

```
  find . -name "*.c"     //将目前目录及其子目录下所有延伸档名是 c 的文件列出来
  find . -type f         //将目前目录其其下子目录中所有一般文件列出
  find . -ctime -20      //将目前目录及其子目录下所有最近 20 天内更新过的文件列出
  find /var/log -type f -mtime +7 -ok rm {} \;     //查找/var/log目录中更改时间在7日以前的普通文件，并在删除之前询问它们
  find . -type f -perm 644 -exec ls -l {} \;       //查找前目录中文件属主具有读、写权限，并且文件所属组的用户和其他用户具有读权限的文件
  find / -type f -size 0 -exec ls -l {} \;         //为了查找系统中所有文件长度为0的普通文件，并列出它们的完整路径

```

## 7.2 whereis

```
  whereis ls             //将和ls文件相关的文件都查找出来

```

## 7.3 which

```
  说明：which指令会在环境变量$PATH设置的目录里查找符合条件的文件。
  which bash             //查看指令"bash"的绝对路径

```

## 7.4 sudo

```
  说明：sudo命令以系统管理者的身份执行指令，也就是说，经由 sudo 所执行的指令就好像是 root 亲自执行。需要输入自己账户密码。
  使用权限：在 /etc/sudoers 中有出现的使用者
  sudo -l                              //列出目前的权限
  $ sudo -u yao vi ~www/index.html    //以 yao 用户身份编辑  home 目录下www目录中的 index.html 文件

```

## 7.5 grep

```
  grep -i "the" demo_file              //在文件中查找字符串(不区分大小写)
  grep -A 3 -i "example" demo_text     //输出成功匹配的行，以及该行之后的三行
  grep -r "ramesh" *                   //在一个文件夹中递归查询包含指定字符串的文件

```

## 7.6 service

```
  说明：service命令用于运行System V init脚本，这些脚本一般位于/etc/init.d文件下，这个命令可以直接运行这个文件夹里面的脚本，而不用加上路径
  service ssh status      //查看服务状态 
  service --status-all    //查看所有服务状态 
  service ssh restart     //重启服务 

```

## 7.7 free

```
  说明：这个命令用于显示系统当前内存的使用情况，包括已用内存、可用内存和交换内存的情况 
  free -g            //以G为单位输出内存的使用量，-g为GB，-m为MB，-k为KB，-b为字节 
  free -t            //查看所有内存的汇总

```

## 7.8 top

```
  top               //显示当前系统中占用资源最多的一些进程, shift+m 按照内存大小查看

```

## 7.9 df

```
  说明：显示文件系统的磁盘使用情况
  df -h            //一种易看的显示

```

## 7.10 mount

```
  mount /dev/sdb1 /u01              //挂载一个文件系统，需要先创建一个目录，然后将这个文件系统挂载到这个目录上
  dev/sdb1 /u01 ext2 defaults 0 2   //添加到fstab中进行自动挂载，这样任何时候系统重启的时候，文件系统都会被加载 

```

## 7.11 uname

```
  说明：uname可以显示一些重要的系统信息，例如内核名称、主机名、内核版本号、处理器类型之类的信息 
  uname -a

```

## 7.12 yum

```
  说明：安装插件命令
  yum install httpd      //使用yum安装apache 
  yum update httpd       //更新apache 
  yum remove httpd       //卸载/删除apache 

```

## 7.13 rpm

```
  说明：插件安装命令
  rpm -ivh httpd-2.2.3-22.0.1.el5.i386.rpm      //使用rpm文件安装apache 
  rpm -uvh httpd-2.2.3-22.0.1.el5.i386.rpm      //使用rpm更新apache 
  rpm -ev httpd                                 //卸载/删除apache 
```

## 7.14 date

```
  date -s "01/31/2010 23:59:53"   ///设置系统时间

```

## 7.15 wget

```
  说明：使用wget从网上下载软件、音乐、视频 
  示例：wget http://prdownloads.sourceforge.net/sourceforge/nagios/nagios-3.2.1.tar.gz
  //下载文件并以指定的文件名保存文件
  wget -O nagios.tar.gz http://prdownloads.sourceforge.net/sourceforge/nagios/nagios-3.2.1.tar.gz

```

## 7.16 ftp

```
   ftp IP/hostname    //访问ftp服务器
   mls *.html -       //显示远程主机上文件列表

```

## 7.17 scp

```
	scp /opt/data.txt  192.168.1.101:/opt/    //将本地opt目录下的data文件发送到192.168.1.101服务器的opt目录下

```