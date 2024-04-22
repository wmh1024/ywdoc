---
layout: page
aside: false
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/wmh1024.png',
    name: 'wmh',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/wmh1024' },
    ]
  },
  {
    avatar: 'https://www.github.com/ljx619.png',
    name: 'ljx619',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/ljx619' },
    ]
  },
  {
    avatar: 'https://www.github.com/lihuibear4.png',
    name: 'lihuibear4',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/lihuibear4' },
    ]
  },
  {
    avatar: 'https://www.github.com/smg1205.png',
    name: 'smg1205',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/smg1205' },
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      开发团队
    </template>
    <template #lead>
      运维文档: 让安装、部署更简单
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    size="small"
    :members="members"
  />
</VPTeamPage>
