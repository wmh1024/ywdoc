const commonPath = '/deploy';

export default [
    {
        text: '前端',
        collapsible: true,
        collapsed: false,
        items: [
            // This shows `/guide/index.md` page.
            { text: 'Nginx', link: `${commonPath}/nginx.md` },
        ]
    },
    {
        text: '后端',
        collapsible: true,
        collapsed: false,
        items: [
            { text: 'Java', link: `${commonPath}/java.md` },
        ]
    },
    {
        text: '容器',
        collapsible: true,
        collapsed: false,
        items: [
            { text: 'Docker', link: `${commonPath}/docker.md` },
            { text: '容器平台', link: `${commonPath}/container.md` }, // /guide/one.md
            { text: 'Vercel', link: `${commonPath}/vercel.md`}
        ]
    }
]
