module.exports = {
  locales: {
    "/": {
      lang: "ja"
    }
  },
  title: "システム技術ノウハウ",
  description: "システム技術ノウハウサイトです",
  head: [
    [
      'link',
      {
        rel: 'stylesheet',
        href: `https://fonts.googleapis.com/css?family=Noto+Sans+JP`
      }
    ]
  ],
  themeConfig: {
    // sidebar: [
    //     ['/', 'ルート'],
    //     ['/about/', 'About VuePress']
    // ],
    sidebar: [
      ['/','root'],
      ['/about/','About'],
      ['/knowhow/','knowhow']
    ],
    sidebarDepth: 1,
    nav: [
      { text: "Home", link: "/" },
      { text: "About", link: "/about/" },
      { text: "KnowHow", link: "/knowhow/" },
      {
        text: "More",
        items: [
          { text: "Twitter", link: "https://twitter.com/" },
          { text: "GitHub", link: "https://github.com/" },
          { text: "Dribbble", link: "https://dribbble.com/" }
        ]
      }
    ]
  }
};
