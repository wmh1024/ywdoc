const commonPath = '/middleware';

export default [
    {
        text: 'Nginx',
        collapsible: true,
        collapsed: false,
        items: [
            // This shows `/guide/index.md` page.
            { text: '静态网站', link: `${commonPath}/Static.md` },
            { text: 'PHP', link: `${commonPath}/PHP.md` },
            { text: '反向代理', link: `${commonPath}/Reverse_Proxy.md` }
        ]
    },
    {
        text: 'Git',
        collapsible: true,
        collapsed: false,
        items: [
            { text: 'Git规范', link: `${commonPath}/Git_specification.md` },

        ]
    },
    {
        text: '数据库',
        collapsible: true,
        collapsed: false,
        items: [
            { text: 'MySQL', link: `${commonPath}/MySQL.md` },
            { text: 'Redis', link: `${commonPath}/Redis.md` } // /guide/one.md
        ]
    }
]
