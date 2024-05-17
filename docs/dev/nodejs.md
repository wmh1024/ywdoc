# Node.js

<br/>

::: warning 注意
nodejs 存在新旧版本不兼容问题，旧版本 nodejs 的项目不能使用新版本的 nodejs 打开。

在此强烈建议安装 [nvm (Node.js 的版本管理工具)](./nvm)，而不是直接安装 nodejs。
:::

## nodejs 安装

### 下载

<br>

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

下载对应的版本，并安装

![](https://image-1319612571.cos.ap-shanghai.myqcloud.com/202405111515546.png)

### 安装

双击下载的安装包，按照提示进行安装。

<img src="https://image-1319612571.cos.ap-shanghai.myqcloud.com/202405111520355.png" alt="image-20240511152006272" style="zoom:50%;" />

安装完成后，在终端输入 `node -v` 和 `npm -v` 检查是否安装成功。


## linux下的安装 

### 下载 Node
首先我们在/usr/local文件夹下新建一个名为nodejs的文件夹

```shell
cd /usr/local
mkdir nodejs
cd nodejs
wget https://nodejs.org/dist/v12.14.0/node-v12.14.0-darwin-x64.tar.gz
```

下载完成后解压

```shell
# 解压
tar zxvf node-v12.14.0-darwin-x64.tar.gz

# 修改文件夹名称
mv node-v12.14.0-darwin-x64/* /usr/local/nodejs
```

###  建立软链接

此时的bin文件夹中已经存在node以及npm，如果你进入到对应文件的中执行命令行一点问题都没有，不过不是全局的，所以通过建立软链接的方式将这个设置为全局。

```shell
ln -s /usr/local/nodejs/bin/node /usr/local/bin
ln -s /usr/local/nodejs/bin/npm /usr/local/bin
```

