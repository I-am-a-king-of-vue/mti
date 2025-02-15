import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

function generateJpChild() {
  const japanChild = [];
  const japanTextArr = ["初级上", "初级下", "中级上", "中级下", "高级上", "高级下"]
  for (let i = 0; i < japanTextArr.length; i++) {
    japanChild.push({
      text: japanTextArr[i],
      link: `/japan/${String.fromCharCode(97 + i)}`
    })
  }
  return japanChild;
}

function generateencChild() {
  const encyclopediaChild = [];
  const textArr = ["人物篇", "著作篇", "政治篇", "经济篇", "历史篇", "自然环保篇", "科技篇", "社会篇", "词语篇",
    "流派篇", "民俗篇", "翻译篇", "文化篇上", "文化篇下", "法律篇", "建筑篇", "医疗卫生篇"];
  for (let i = 0; i < textArr.length; i++) {
    encyclopediaChild.push({
      text: textArr[i],
      link: `/encyclopedia/${String.fromCharCode(97 + i)}`
    })
  }
  return encyclopediaChild;
}

export default defineUserConfig({
  bundler: viteBundler(),
  title:"我要上岸!!",
  description:"专科生0基础跨考翻硕记录学习过程,頑張ります!!",
  theme: defaultTheme({
    logo: '/image/logo.jpg',
    sidebar: [
      {
        text:"前言",
        link:"/"
      },
      {
        text: "jlpt",
        link: "/japan/",
        collapsible: true,
        children: [...generateJpChild()]
      },
      {
        text: "百科知识",
        link: "/encyclopedia/",
        children:[...generateencChild()]
      },
      {
        text: "政治",
        link: "/politics/",
      }
    ],
  }),
})