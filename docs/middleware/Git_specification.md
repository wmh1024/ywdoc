#  提交规范
来自
<div class="linkcard">
  <a href="https://github.com/wmh1024/" target="_blank">
    <p class="description">wmh<br><span>https://github.com/wmh1024/</span></p>
    <div class="logo">
        <img alt="Logo" width="70px" height="70px" src="https://ywdoc-1306153177.cos.ap-shanghai.myqcloud.com/2024/04/22/662659ee0d358.jpg" />
    </div>
  </a>
</div>

## 1.提交频率
::: tip 提交频率
尽量保持提交频率较小，每个提交应该只包含一个逻辑上的更改或修复。
:::


## 2.提交信息格式

::: tip 提交信息格式
每个提交应该包含一个简明扼要的提交信息。\
[类型]: 描述
:::

### 2.1类型（Type）

::: warning 类型

1.  feat：新增特性或功能
2.  fix：修复Bug
3.  docs：文档相关的变更
4.  style：代码风格的调整，如格式化、空格等
5.  refactor：重构代码
6.  test：增加或修改测试用例
7.  chore：构建过程或辅助工具的变更

:::



### 2.2提交信息内容（description）
::: warning 提交信息内容

提交信息应该描述清楚修改的内容，避免使用模糊的词汇。可以提供一些上下文信息，如问题编号、参考文档等。
:::

### 2.3提交信息样例
::: warning 提交信息样例

fix: 修复登录页面显示问题

style: 修改了main.tsx的缩进方式

docs: 修复了README.md的图片路径问题
:::
## 3.分支管理
::: tip 分支管理
使用合理的分支管理策略，例如：

1. 主分支（通常是master或main）用于部署稳定的版本。
2. 开发分支（例如dev用于进行功能开发和集成测试。
3. 修复分支（例如bugfix/xxx）用于解决问题和修复bug。
4. 在进行功能开发时，可以从开发分支创建特性分支（例如feature/xxx），完成后再合并到开发分支。
   
:::