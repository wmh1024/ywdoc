const commonPath = '/linux';

export default [
    {
        text: 'Linux',
        collapsible: true,
        collapsed: false,
        items: [
            // This shows `/guide/index.md` page.
            { text: 'Linux的安装', link: `${commonPath}/linux.md` }, // /guide/index.md
            { text: 'Nginx的基础使用', link: `${commonPath}/Nginx.md` }, // /guide/one.md
        ]
    },
    {
        text: '基础操作',
        collapsible: true,
        collapsed: false,
        items: [
            { text: '基础知识', link: `${commonPath}/base1.md` },
            { text: '基础操作', link: `${commonPath}/base2.md` },
            { text: '目录操作', link: `${commonPath}/base3.md` },
            { text: '文件操作', link: `${commonPath}/base4.md` },
            { text: '文件权限', link: `${commonPath}/base5.md` },
            { text: '打包与解压', link: `${commonPath}/base6.md` },
            { text: '其他常用命令', link: `${commonPath}/base7.md` },
            { text: '系统管理', link: `${commonPath}/base8.md` },

        ]
    },
    {
        text: '软件',
        collapsible: true,
        collapsed: false,
        items: [
            { text: 'SSH', link: `${commonPath}/SSH.md` },
            { text: 'vim', link: `${commonPath}/vim.md` }
        ]
    },
    {
        text: '面板',
        collapsible: true,
        collapsed: false,
        items: [
            { text: '宝塔面板', link: `${commonPath}/bt.md` },
            { text: '1Panel', link: `${commonPath}/1Panel.md` }
        ]
    },

]
