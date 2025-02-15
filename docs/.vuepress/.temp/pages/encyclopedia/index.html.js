import comp from "/Users/apple/常用/代码/mti/docs/.vuepress/.temp/pages/encyclopedia/index.html.vue"
const data = JSON.parse("{\"path\":\"/encyclopedia/\",\"title\":\"前言\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1739628317000},\"filePathRelative\":\"encyclopedia/README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
