const commonPath = '/dev';

export default [
    {
        text: 'Node.js',
        collapsible: true,
        collapsed: false,
        items: [
            { text: 'Node.js', link: `${commonPath}/nodejs.md` },
            { text: 'nvm', link: `${commonPath}/nvm.md` },
        ]
    },
    {
        text: 'Java',
        collapsible: true,
        collapsed: false,
        items: [
            { text: 'JavaSE', link: `${commonPath}/javase.md` },
            { text: 'JavaEE', link: `${commonPath}/javaee.md` },
            { text: 'SpringBoot', link: `${commonPath}/springboot.md` },
            { text: 'SpringCloud', link: `${commonPath}/springcloud.md` }
        ]
    },{
        text: 'Python',
        collapsible: true,
        collapsed: false,
        items: [
            { text: 'Python', link: `${commonPath}/python.md` },
            { text: 'Anaconda', link: `${commonPath}/anaconda.md` },
            { text: 'PyTorch', link: `${commonPath}/pytorch.md` },
        ]
    }
]
