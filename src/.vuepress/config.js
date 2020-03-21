module.exports = {
  locales: {
    "/": {
      lang: "ja"
    }
  },
  title: "テストサイト",
  description: "ここはテストサイトなのです",
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
    sidebar: "auto",
    nav: [
      { text: "Home", link: "/" },
      { text: "About", link: "/about/" },
      { text: "Blog", link: "https://www.nxworld.net/" },
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
