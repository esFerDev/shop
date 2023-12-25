import { getSidebar } from "vitepress-plugin-auto-sidebar";

export default {
  base: "/shop/",
  title: "esFerDev's Docs",
  description: "The official website of documentation of esFerDev's Shop",
  lastUpdated: true,
  cleanUrls: true,
  themeConfig: {
    logo: "/logo.svg",
    editLink: {
      pattern: "https://github.com/AndrewR3K/vitepress-boilerplate/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },
    siteTitle: "esFerDev's Docs",
    outline: "deep",
    nav: [
      { text: "Shop", link: "https://esferdev.tebex.io/" },
      { text: "About", link: "/about" },
      { text: "Docs", link: "/api" },
      { text: "Team", link: "/team" },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/AndrewR3K/vitepress-boilerplate" },
      { icon: "discord", link: "https://discord.gg/invite/c3ZscGYpZH" },
    ],
    sidebar: {
      "/api/": getSidebar({
        contentRoot: "/docs",
        contentDirs: ["api"],
        collapsible: true,
        collapsed: false,
      }),
      "/api": getSidebar({
        contentRoot: "/docs",
        contentDirs: ["api"],
        collapsible: true,
        collapsed: false,
      }),
    },
    footer: {
      message: "Released under the GNU General Public License v2.0.",
      copyright: "Copyright © 2024-present esFerDev's Docs",
    },
  },
};
