# nvm

## nvm 是什么

nvm：Node.js Version Management。

nvm 是一个 nodejs 的版本管理工具。通过它可以**方便地**安装和切换不同版本的 nodejs 。

## nvm 安装

### 卸载 nodejs

如果之前已经安装过 nodejs，那么你需要先卸载，如果没有安装那直接跳过这一步。

// todo

### 下载 nvm

在 GitHub
下载最新的发行版：[Releases · coreybutler/nvm-windows (github.com)](https://github.com/coreybutler/nvm-windows/releases)

找到最新的 Release，点击下载 `nvm-setup.exe`。

![](https://ywdoc-1306153177.cos.ap-shanghai.myqcloud.com/2024/04/24/66285eb2cb4e6.png)

### 安装 nvm

验证安装完成：在终端输入 `nvm -v`，会输出相应版本号。

## nvm 配置（配置路径和下载源）

安装完nvm后先不要着急安装node。

找到nvm安装路径 -> 找到 settings.txt 文件 -> 配置下载源
![](https://image-1319612571.cos.ap-shanghai.myqcloud.com/202405091906894.png)

以下为最新镜像源:

::: code-group

```txt
#配置node镜像： 
node_mirror: https://npmmirror.com/mirrors/node/`
#配置npm镜像：`
npm_mirror: https://npmmirror.com/mirrors/npm/
```

:::
![image-20240303220853542](https://image-1319612571.cos.ap-shanghai.myqcloud.com/202403032208593.png)

## 使用nvm安装node

在终端输入 `nvm list available`， 查看网络可以安装的版本。

![image-20240303221021466](https://image-1319612571.cos.ap-shanghai.myqcloud.com/202403032210512.png)

选择一个版本安装，比如 `nvm install 21.6.2`

使用这个版本的node，`nvm use 21.6.2`输入`node -v` 和 `npm -v`可以查询到node和npm的版本号。

输入`nvm list` 查看已经安装的node，`*`号表示当前使用的node版本。

## nvm命令

### 查看可安装的版本

```nvm
nvm list available
```

### 安装对应的版本

```nvm
nvm install 版本号
```

### 使用对应的版本

```nvm
nvm use 版本号
```

### 查看已经安装的node

```nvm
nvm list
```