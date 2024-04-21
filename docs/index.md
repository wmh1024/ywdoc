---
layout: home
title: 运维文档
titleTemplate: 让安装、部署更简单

hero:
  name: 运维文档
  text: 让安装、部署更简单
  tagline: 学会运维，仅需数分钟
  actions:
    - theme: brand
      text: 立即开始！
      link: /deploy/
    - theme: alt
      text: GitHub
      link: https://github.com/wmh1024/yunweidocs
  image:
    src: /logo.png
    alt: VitePress
    
features:
  - title: "Vite: The DX that can't be beat"
    details: Feel the speed of Vite. Instant server start and lightning fast HMR that stays fast regardless of the app size.
  - title: Designed to be simplicity first
    details: With Markdown-centered content, it's built to help you focus on writing and deployed with minimum configuration.
  - title: Power of Vue meets Markdown
    details: Enhance your content with all the features of Vue in Markdown, while being able to customize your site with Vue.
  - title: Fully static yet still dynamic
    details: Go wild with true SSG + SPA architecture. Static on page load, but engage users with 100% interactivity from there.
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #1488d1 30%, #84b7fb 60%);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #1488d1 30%, #84b7fb 60%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>
