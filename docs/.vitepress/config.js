import deploySidebar from './deploySidebar'
import middlewareSidebar from './middlewareSidebar'
import devSidebar from './devSidebar'
import linuxSidebar from './linuxSidebar'
import winserverSidebar from './winserverSidebar'

import timeline from "vitepress-markdown-timeline";
export default {
    base: '/',
    lang: 'zh-CN',
    title: '运维文档', // 所有文档的浏览器标签title
    description: '运维文档', // 会渲染成<meta>标签，SEO用
    lastUpdated: true,
    themeConfig: {
        siteTitle: '运维文档',
        logo: '/logo.png',
        i18nRouting: false,
        //上次更新时间
        lastUpdated: {
            text: '最后更新于',
            formatOptions: {
                dateStyle: 'short',
                timeStyle: 'short'
            }
        },
        //本地搜索
        search: {
            provider: 'local',
            options: {
                locales: {
                    root: {
                        translations: {
                            button: {
                                buttonText: '搜索文档',
                                buttonAriaLabel: '搜索文档'
                            },
                            modal: {
                                noResultsText: '无法找到相关结果',
                                resetButtonTitle: '清除查询条件',
                                footer: {
                                    selectText: '选择',
                                    navigateText: '切换'
                                }
                            }
                        }
                    }
                }
            }
        },
        nav: [
            { text: '部署', link: '/deploy/', activeMatch: '/deploy/' },
            { text: '中间件', link: '/middleware/', activeMatch: '/middleware/' },
            { text: '开发环境', link: '/dev/', activeMatch: '/dev/' },
            {
                text: '服务器',
                items: [
                    { text: 'Linux', link: '/linux/', activeMatch: '/linux/' },
                    { text: 'Windows Server', link: '/winserver/', activeMatch: '/winserver/' }
                ]
            },
            { text: '关于', link: '/about/', activeMatch: '/about/' }
        ],
        sidebar: {
            '/deploy/': deploySidebar,
            '/middleware/': middlewareSidebar,
            '/dev/': devSidebar,
            '/linux/': linuxSidebar,
            '/winserver/': winserverSidebar
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
    markdown: {
        //行号显示
        lineNumbers: true,

        //时间线
        config: (md) => {
            md.use(timeline);
        },
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
