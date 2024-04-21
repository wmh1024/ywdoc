import deploySidebar from './deploySidebar'
import middlewareSidebar from './middlewareSidebar'
import devSidebar from './devSidebar'
import linuxSidebar from './linuxSidebar'
import aboutSidebar from './aboutSidebar'

export default {
    base: '/',
    lang: 'zh-CN',
    title: '运维文档', // 所有文档的浏览器标签title
    description: '运维文档', // 会渲染成<meta>标签，SEO用
    themeConfig: {
        siteTitle: '运维文档',
        logo: '/logo.png',
        nav: [
            { text: '部署', link: '/deploy/', activeMatch: '/deploy/' },
            { text: '中间件', link: '/middleware/', activeMatch: '/middleware/' },
            { text: '开发环境', link: '/dev/', activeMatch: '/dev/' },
            { text: 'Linux', link: '/linux/', activeMatch: '/linux/' },
            { text: '关于', link: '/about/', activeMatch: '/about/' }
        ],
        sidebar: {
            '/deploy/': deploySidebar,
            '/middleware/': middlewareSidebar,
            '/dev/': devSidebar,
            '/linux/': linuxSidebar,
            '/about/': aboutSidebar
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/wmh1024/yunweidocs' }
        ],
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2024'
        }
    },
    head: [
        [
            'script',
            { charset: 'UTF-8', id: 'LA_COLLECT', src: '//sdk.51.la/js-sdk-pro.min.js' }
        ],
        [
            'script',
            {},
            `LA.init({ id: "3IBN50LSNvZUP11Q", ck: "3IBN50LSNvZUP11Q" })`
        ]
    ]
}
