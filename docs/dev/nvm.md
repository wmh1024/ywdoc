# nvm

## nvm 是什么

nvm：Node.js Version Management。

nvm 是一个 nodejs 的版本管理工具。通过它可以**方便地**安装和切换不同版本的 nodejs 。

## nvm 安装（Windows）

### 卸载 nodejs

如果之前已经安装过 nodejs，那么你需要先卸载，如果没有安装那直接跳过这一步。


### 下载 nvm

在 GitHub
下载最新的发行版：[Releases · coreybutler/nvm-windows (github.com)](https://github.com/coreybutler/nvm-windows/releases)

找到最新的 Release，点击下载 `nvm-setup.exe`。

![](https://ywdoc-1306153177.cos.ap-shanghai.myqcloud.com/2024/04/24/66285eb2cb4e6.png)

### 安装 nvm

验证安装完成：在终端输入 `nvm -v`，会输出相应版本号。

### nvm 配置（配置路径和下载源）

安装完nvm后需配置镜像源

```shell
nvm node_mirror https://npmmirror.com/mirrors/node/
nvm npm_mirror https://npmmirror.com/mirrors/npm/
```

### 使用nvm安装node

在终端输入 `nvm list available`， 查看网络可以安装的版本。

![image-20240303221021466](https://image-1319612571.cos.ap-shanghai.myqcloud.com/202403032210512.png)

选择一个版本安装，比如 `nvm install 21.6.2`

使用这个版本的node，`nvm use 21.6.2`输入`node -v` 和 `npm -v`可以查询到node和npm的版本号。

输入`nvm list` 查看已经安装的node，`*`号表示当前使用的node版本。



## nvm 安装（linux）

<div class="linkcard">
  <a href="https://github.com/nvm-sh/nvm" target="_blank">
    <p class="description">nvm<br><span>https://github.com/nvm-sh/nvm</span></p>
    <div class="logo">
        <img alt="Logo" width="70px" height="70px" src="https://favicon.cccyun.cc/https://github.com/nvm-sh/nvm" />
    </div>
  </a>
</div>

### 命令方式安装nvm
::: code-group
```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash
```
:::
或
::: code-group
```sh
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash
```
:::
> 其中版本v0.35.2可以在https://github.com/nvm-sh/nvm/releases中选择自己需要版本

安装完成后在~/.bashrc等配置文件中会出现一下配置(如果没有请自己新增)
::: code-group
```sh
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```
:::

执行`source ~/.bashrc`使配置生效

使用`command -v nvm`验证是否安装成功

### 修改 环境变量
::: code-group
```sh
sudo vi ~/.bashrc
```
:::
### 在最后添加淘宝镜像
::: code-group
```sh
export NVM_NODEJS_ORG_MIRROR=https://npmmirror.com/mirrors/node/
export NVM_IOJS_ORG_MIRROR=https://npmmirror.com/mirrors/iojs
```
:::
### 让配置生效
::: code-group
```sh
source ~/.profile
```
:::

### Linux 下更推荐宝塔
![](https://image-1319612571.cos.ap-shanghai.myqcloud.com/202405091944150.png)

> 安装、配置、使用都很方便，而且可以一键安装node

![](https://image-1319612571.cos.ap-shanghai.myqcloud.com/202405091957393.png)
## nvm命令

### 查看可安装的版本
::: code-group
```nvm
nvm list available
```
:::
### 安装对应的版本
::: code-group
```nvm
nvm install 版本号
```
:::
### 使用对应的版本
::: code-group
```nvm
nvm use 版本号
```
:::
### 查看已经安装的node
::: code-group
```nvm
nvm list
```
:::
