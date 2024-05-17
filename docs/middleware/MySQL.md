# MySQL

## 安装MySQL

### 安装

1. 运行以下命令，更新 yum 源。
   本操作以下载 MySQL 8.0 版本为例，如果想下载其他版本的 MySQL，请参见 [MySQL官方文档](https://dev.mysql.com/doc/)

   ```shell
   sudo rpm -Uvh https://dev.mysql.com/get/mysql80-community-release-el7-7.noarch.rpm
   ```

2. 运行以下命令，安装 MySQL。

   ```shell
   sudo yum -y install mysql-community-server --enablerepo=mysql80-community --nogpgcheck
   ```

3. 运行以下命令，查看 MySQL 版本号。

   ```shell
   mysql -V
   ```

   返回结果如下，表示 MySQL 安装成功。

   ```
   mysql  Ver 8.0.37 for Linux on x86_64 (MySQL Community Server - GPL)
   ```

---

### 配置 MySQL

1. 运行以下命令，启动并设置开机自启动 MySQL 服务。

   ```shell
   sudo systemctl start mysqld
   sudo systemctl enable mysqld
   ```

2. 运行以下命令，获取并记录root用户的初始密码。

   ```shell
   sudo grep 'temporary password' /var/log/mysqld.log
   ```

   执行命令结果示例如下。

   ```shell
   2024-05-08T12:30:43.708791Z 6 [Note] [MY-010454] [Server] A temporary password is generated for root@localhost: cL,0)wata8%B
   ```

   > **说明** 示例末尾的 `cL,0)wata8%B` 为初始密码，后续在对 MySQL 进行安全性配置时，需要使用该初始密码

3. 运行以下命令，对 MySQL 进行安全性配置。

   ```shell
   sudo mysql_secure_installation
   ```

   a. 根据提示信息，重置MySQL数据库root用户的密码。

   > **说明** 在在输入密码时，系统为了最大限度地保证数据安全，命令行将不做任何回显。您只需要输入正确的密码信息，然后按`Enter` 键即可.

   ```shell
   Enter password for user root: #输入已获取的root用户初始密码
   
   The existing password for the user account root has expired. Please set a new password.
   
   New password: #输入新的MySQL密码
   
   Re-enter new password: #重复输入新的MySQL密码
   The 'validate_password' component is installed on the server.
   The subsequent steps will run with the existing configuration
   of the component.
   Using existing password for root.
   Change the password for root ? ((Press y|Y for Yes, any other key for No) :Y #输入Y选择更新MySQL密码。您也可以输入N不再更新MySQL密码。
   
   New password: #输入新的MySQL密码
   
   Re-enter new password: #重复输入新的MySQL密码
   
   Estimated strength of the password: 100
   Do you wish to continue with the password provided?(Press y|Y for Yes, any other key for No) :Y #输入Y确认使用已设置的密码。
   ```

   b. 根据提示信息，删除匿名用户。

   ```shell
   By default, a MySQL installation has an anonymous user,
   allowing anyone to log into MySQL without having to have
   a user account created for them. This is intended only for
   testing, and to make the installation go a bit smoother.
   You should remove them before moving into a production
   environment.
   
   Remove anonymous users? (Press y|Y for Yes, any other key for No) :Y #输入Y删除MySQL默认的匿名用户。
   Success.
   ```

   c. 禁止 root 账号远程登录

   ```shell
   Normally, root should only be allowed to connect from
   'localhost'. This ensures that someone cannot guess at
   the root password from the network.
   
   Disallow root login remotely? (Press y|Y for Yes, any other key for No) :Y #输入Y禁止root远程登录。
   Success.
   ```

   d. 删除test库以及对test库的访问权限。

   ```shell
   By default, MySQL comes with a database named 'test' that
   anyone can access. This is also intended only for testing,
   and should be removed before moving into a production
   environment.
   
   
   Remove test database and access to it? (Press y|Y for Yes, any other key for No) :Y #输入Y删除test库以及对test库的访问权限。
    - Dropping test database...
   Success.
   
    - Removing privileges on test database...
   Success.
   ```

   e. 重新加载授权表。

   ```shell
   Reloading the privilege tables will ensure that all changes
   made so far will take effect immediately.
   
   Reload privilege tables now? (Press y|Y for Yes, any other key for No) :Y #输入Y重新加载授权表。
   Success.
   
   All done!
   ```

   安全性配置的更多信息，请参见[MySQL官方文档](https://dev.mysql.com/doc/refman/5.7/en/mysql-secure-installation.html)。


### 配置允许远程访问

建议使用非root账号远程登录MySQL数据库。将创建新的MySQL账号，用于远程访问MySQL。

1. 运行以下命令后，输入root用户的密码登录MySQL。

   ```shell
   sudo mysql -uroot -p
   ```

   输入设置好的密码

2. 依次运行以下命令，创建远程登录MySQL的账号，并允许远程主机使用该账号访问MySQL。
   本示例账号为`demo`、密码为`Demo@123****`。

   ```shell
   # 创建数据库用户dmsTest,并授予远程连接权限。
   create user 'demo'@'%' identified by 'Demo@123****'; 
   # 为dmsTest用户授权数据库所有权限。
   grant all privileges on *.* to 'demo'@'%'; 
   # 刷新权限。
   flush privileges; 
   ```

3. 执行以下命令，退出数据库。

   ```sql
   exit
   ```

4. 使用`demo`账号远程登录 MySQL

