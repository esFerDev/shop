import { getSidebar } from "vitepress-plugin-auto-sidebar";

export default {
  base: "/shop/",
  title: "esFerDev's Docs",
  description: "The official website of documentation of esFerDev's Shop",
  lastUpdated: true,
  cleanUrls: true,
  themeConfig: {
    logo: "/logo.png",
    editLink: {
      pattern: "https://github.com/esFerDev/shop/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },
    siteTitle: "esFerDev's Docs",
    outline: "deep",
    nav: [
      { text: "Docs", link: "/documentation" },
      { text: "Shop", link: "https://esferdev.tebex.io/" },
      { text: "About", link: "/about" },
      { text: "Team", link: "/team" },
    ],
    socialLinks: [
      //{ icon: "github", link: "https://github.com/AndrewR3K/vitepress-boilerplate" },
      { icon: "discord", link: "https://discord.gg/invite/c3ZscGYpZH" },
    ],
    sidebar: {
      "/documentation/": getSidebar({
        contentRoot: "/docs",
        contentDirs: ["documentation", "FiveM-Escrow-System", "FAQ"],
        collapsible: true,
        collapsed: true,
      }),
      "/documentation": getSidebar({
        contentRoot: "/docs",
        contentDirs: ["documentation", "FiveM-Escrow-System", "FAQ"],
        collapsible: true,
        collapsed: true,
      }),

      "/FiveM-Escrow-System/": getSidebar({
        contentRoot: "/docs",
        contentDirs: ["documentation", "FiveM-Escrow-System", "FAQ"],
        collapsible: true,
        collapsed: true,
      }),
      "/FiveM-Escrow-System": getSidebar({
        contentRoot: "/docs",
        contentDirs: ["documentation", "FiveM-Escrow-System", "FAQ"],
        collapsible: true,
        collapsed: true,
      }),

      "/FAQ/": getSidebar({
        contentRoot: "/docs",
        contentDirs: ["documentation", "FiveM-Escrow-System", "FAQ"],
        collapsible: true,
        collapsed: true,
      }),
      "/FAQ": getSidebar({
        contentRoot: "/docs",
        contentDirs: ["documentation", "FiveM-Escrow-System", "FAQ"],
        collapsible: true,
        collapsed: true,
      }),
    },
    footer: {
      message: "Released under the GNU General Public License v2.0.",
      copyright: "Copyright © 2024-present esFerDev's Docs",
    },
  },
};
