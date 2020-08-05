const config = {
  gatsby: {
    pathPrefix: "/aoe2de",
    siteUrl: "https://laymantruant.github.io/aoe2de/",
    gaTrackingId: null,
    trailingSlash: false
  },
  header: {
    logo:
      "https://imgur.com/YlO4ts6.png",
    logoLink: "/",
    title:
      "<div>世紀帝國2決定版<div>",
    githubUrl: "https://github.com/LaymanTruant/aoe2de",
    helpUrl: "",
    tweetText: "",
    social: "",
    links: [{ text: "", link: "" }],
    search: {
      enabled: false,
      indexName: "",
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY
    }
  },
  sidebar: {
    forcedNavOrder: [
      "/build", // add trailing slash if enabled above
    ],
    collapsedNav: [
      "/build" // add trailing slash if enabled above
    ],
    links: [{ text: "Steam商店頁面", link: "https://store.steampowered.com/app/813780/Age_of_Empires_II_Definitive_Edition/" }],
    frontline: false,
    ignoreIndex: true,
    title:
      "wiki 繁體中文版"
  },
  siteMetadata: {
    title: "AoE2 Definitive Edition",
    description: "Documentation built with mdx.",
    ogImage: null,
    docsLocation:
      "https://github.com/LaymanTruant/aoe2de/tree/master/app/content",
    favicon: "https://imgur.com/YlO4ts6.png"
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: "Gatsby Gitbook Starter",
      short_name: "GitbookStarter",
      start_url: "/",
      background_color: "#6b37bf",
      theme_color: "#6b37bf",
      display: "standalone",
      crossOrigin: "use-credentials",
      icons: [
        {
          src: "src/pwa-512.png",
          sizes: `512x512`,
          type: `image/png`
        }
      ]
    }
  }
};

module.exports = config;
