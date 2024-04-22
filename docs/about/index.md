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
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/lihuibear4' },
    ]
  },
  {
    avatar: 'https://www.github.com/smg1205.png',
    name: 'smg1205',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/smg1205' },
    ]
  },
  {
    avatar: 'https://www.github.com/sdadgz.png',
    name: 'sdadgz',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/sdadgz' },
    ]
  },
];

const Contributors = [
  {
    avatar: 'https://www.github.com/Shaogxhaha.png',
    name: 'xionger',
    links: [
      { icon: 'github', link: 'https://github.com/Shaogxhaha' },
    ]
  },
];

// 暂未启用
const Sponsors = [
  {
    avatar: 'https://www.github.com/Shaogxhaha.png',
    name: 'xionger',
  },
]

</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      开发团队
    </template>
    <template #lead>
      运维文档：让安装、部署更简单
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    size="small"
    :members="members"
  />
 <VPTeamPageTitle>
    <template #title>
      贡献者
    </template>
    <template #lead>
      感谢所有为了开源项目贡献的朋友
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    size="small"
    :members="Contributors"
  />
<!--<VPTeamPageTitle>
    <template #title>
      赞助者
    </template>
    <template #lead>
      感谢赞助此开源项目的朋友，在此会公开鸣谢
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    size="small"
    :members="Sponsors"
  />-->
</VPTeamPage>
