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
        i18nRouting: false,
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
        },
        //侧边栏文字更改(移动端)
        sidebarMenuLabel: '目录',
        //返回顶部文字修改(移动端)
        returnToTopLabel: '返回顶部',

        // 编辑本页
        editLink: {
            pattern: 'https://github.com/wmh1024/yunweidocs/edit/main/docs/:path',
            text: '在GitHub编辑本页'
        },
        //自定义上下页名
        docFooter: {
            prev: '上一页',
            next: '下一页'
        },
        //手机端深浅模式文字修改
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式',

        //大纲显示2-3级标题
        outline: {
            level: [2, 3],
            label: '目录'
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
