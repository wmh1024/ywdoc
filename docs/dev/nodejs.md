# Node.js

<br/>

::: warning 注意
nodejs 存在新旧版本不兼容问题，旧版本 nodejs 的项目不能使用新版本的 nodejs 打开。

在此强烈建议安装 [nvm (Node.js 的版本管理工具)](./nvm)，而不是直接安装 nodejs。
:::

## nodejs 安装
### 下载
<div class="linkcard">
  <a href="https://www.nodejs.com.cn/download.html" target="_blank">
    <p class="description">Node.js 中文网<br><span>https://www.nodejs.com.cn/download.html</span></p>
    <div class="logo">
        <img alt="Logo" width="70px" height="70px" src="https://image-1319612571.cos.ap-shanghai.myqcloud.com/202405111503151.png" />
    </div>
  </a>
</div>
<br>
<div class="linkcard">
  <a href="https://nodejs.org/en/download" target="_blank">
    <p class="description">Node.js 官网<br><span>https://nodejs.org/en/download</span></p>
    <div class="logo">
        <img alt="Logo" width="70px" height="70px" src="https://image-1319612571.cos.ap-shanghai.myqcloud.com/202405111503151.png" />
    </div>
  </a>
</div>

>下载对应的版本，并安装

![image-20240511151520332](https://image-1319612571.cos.ap-shanghai.myqcloud.com/202405111515546.png)

### 安装

双击下载的安装包，按照提示进行安装。

<img src="https://image-1319612571.cos.ap-shanghai.myqcloud.com/202405111520355.png" alt="image-20240511152006272" style="zoom:50%;" />

安装完成后，在终端输入 `node -v` 和 `npm -v` 检查是否安装成功。



## linux下的安装 
首先我们在/usr/local文件夹下新建一个名为nodejs的文件夹
cd /usr/local
1
mkdir nodejs
1


cd nodejs
1
wget https://nodejs.org/dist/v12.14.0/node-v12.14.0-darwin-x64.tar.gz
1


2、解压及其重新命名
此时已经存在了压缩包，我们需要解压

tar zxvf node-v12.14.0-darwin-x64.tar.gz
1


删掉多余的压缩包

rm -rf node-v12.14.0-darwin-x64.tar.gz
1
改名为nodejs

mv node-v12.14.0-darwin-x64/* /usr/local/nodejs
1
第二步 建立软链接
 此时的bin文件夹中已经存在node以及npm，如果你进入到对应文件的中执行命令行一点问题都没有，不过不是全局的，所以通过建立软链接的方式将这个设置为全局。
执行：

ln -s /usr/local/nodejs/bin/node /usr/local/bin
1
ln -s /usr/local/nodejs/bin/npm /usr/local/bin
1
第三步 测试


## nodejs 相关配置

###  
