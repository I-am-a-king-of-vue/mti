export const themeData = JSON.parse("{\"logo\":\"/image/logo.jpg\",\"contributors\":false,\"sidebar\":[{\"text\":\"前言\",\"link\":\"/\"},{\"text\":\"jlpt\",\"link\":\"/japan/\",\"collapsible\":true,\"children\":[{\"text\":\"初级上\",\"link\":\"/japan/a\"},{\"text\":\"初级下\",\"link\":\"/japan/b\"},{\"text\":\"中级上\",\"link\":\"/japan/c\"},{\"text\":\"中级下\",\"link\":\"/japan/d\"},{\"text\":\"高级上\",\"link\":\"/japan/e\"},{\"text\":\"高级下\",\"link\":\"/japan/f\"}]},{\"text\":\"百科知识\",\"link\":\"/encyclopedia/\",\"children\":[{\"text\":\"人物篇\",\"link\":\"/encyclopedia/a\"},{\"text\":\"著作篇\",\"link\":\"/encyclopedia/b\"},{\"text\":\"政治篇\",\"link\":\"/encyclopedia/c\"},{\"text\":\"经济篇\",\"link\":\"/encyclopedia/d\"},{\"text\":\"历史篇\",\"link\":\"/encyclopedia/e\"},{\"text\":\"自然环保篇\",\"link\":\"/encyclopedia/f\"},{\"text\":\"科技篇\",\"link\":\"/encyclopedia/g\"},{\"text\":\"社会篇\",\"link\":\"/encyclopedia/h\"},{\"text\":\"词语篇\",\"link\":\"/encyclopedia/i\"},{\"text\":\"流派篇\",\"link\":\"/encyclopedia/j\"},{\"text\":\"民俗篇\",\"link\":\"/encyclopedia/k\"},{\"text\":\"翻译篇\",\"link\":\"/encyclopedia/l\"},{\"text\":\"文化篇上\",\"link\":\"/encyclopedia/m\"},{\"text\":\"文化篇下\",\"link\":\"/encyclopedia/n\"},{\"text\":\"法律篇\",\"link\":\"/encyclopedia/o\"},{\"text\":\"建筑篇\",\"link\":\"/encyclopedia/p\"},{\"text\":\"医疗卫生篇\",\"link\":\"/encyclopedia/q\"}]},{\"text\":\"政治\",\"link\":\"/politics/\"}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"navbar\":[],\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
