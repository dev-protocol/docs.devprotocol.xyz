const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const config = {
  onBrokenLinks: 'log',
  title: "Dev Protocol Documentation",
  tagline: "Decentralized Creator Economy",
  url: "https://docs.devprotocol.xyz",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "Dev Protocol",
  projectName: "docs.devprotocol.xyz",
  presets: [
      [
        "@docusaurus/preset-classic",
        {
          docs: {
            sidebarPath: require.resolve("./sidebars.js"),
            editUrl: "https://github.com/dev-protocol/docs.devprotocol.xyz",
            routeBasePath: '/',
          },
          theme: {
            customCss: require.resolve("./src/css/custom.css"),
          },
        },
      ],
    ],
    i18n: {
      defaultLocale: 'en',
      locales: ['en','ja','pt'],
      localeConfigs: {
        en: {
          label: 'English',
        },
        ja: {
          label: 'Japanese',
        },
        pt: {
          label: 'Português',
        },
      },
    },
  themeConfig:
    ({
      autoCollapseSidebarCategories: true,
      hideableSidebar: true,
      colorMode: {
         defaultMode: 'light',
         disableSwitch: false,
         respectPrefersColorScheme: true,
      },
      navbar: {
            hideOnScroll: true,
            logo: {
              alt: "Dev Protocol logo",
              src: "/img/Lightmode.svg",
              srcDark: "/img/Darkmode.svg",
            },
            items: [
            {
              to: "/Introduction/",
              label: "The Protocol",
              position: "left"
            },
            {
              to: "/stakes-social/",
              label: "Stakes Social",
              position: "left"
            },
            {
              to: "/developers/",
              label: "Developers",
              position: "left"
            },
            {
              type: 'dropdown',
              label: 'Community',
              position: 'left',
              items: [
                {
                  label: 'Medium Page',
                  to: 'https://medium.com/devprtcl',
                },
                {
                  label: 'Blog',
                  to: 'https://initto.devprotocol.xyz/en/',
                },
                {
                  label: 'GitHub',
                  to: 'https://github.com/dev-protocol',
                },
                {
                  label: 'Twitter',
                  to: 'https://twitter.com/devprtcl',
                },
                {
                  label: 'Discord',
                  to: 'https://discord.com/invite/VwJp4KM',
                },
                {
                  label: 'Forum',
                  to: 'https://community.devprotocol.xyz/',
                },
                {
                  label: 'Community Builders',
                  to: 'https://builders.devprotocol.xyz/',
                }
              ],
            },
            {
              type: 'docsVersionDropdown',
              position: 'right'
            },
            {
              type: 'localeDropdown',
              position: 'right'
            },
            {
              href: 'https://github.com/dev-protocol',
              position: 'right',
              className: 'header-github-link',
              'aria-label': 'GitHub repository',
            }
          ],
  },
      footer: {
        links: [
          {
          title: 'Docs',
          items: [
            {
              label: 'Home',
              to: '/',
            },
            {
              label: 'Getting Started',
              to: '/introduction/',
            },
            {
              label: 'Tutorials',
              to: 'https://initto.devprotocol.xyz/en/',
            },
            {
              label: 'Support',
              to: 'https://ctt.ac/CEchF',
            },
            {
              label: 'FAQs',
              to: 'https://devprotocol.xyz/faq',
            },
          ],
    },
    {
        title: 'Community',
        items: [
          {
            label: 'Discord',
            to: 'https://discord.com/invite/VwJp4KM',
          },
          {
            label: "Forum",
            to: "https://community.devprotocol.xyz/",
          },
          {
            label: 'Twitter',
            to: 'https://twitter.com/devprtcl',
          },
          {
            label: 'Youtube',
            to: 'https://www.youtube.com/channel/UCN7m74tFgJJnoGL4zk6aJ6g',
          },
          {
            label: 'GitHub',
            to: 'https://github.com/dev-protocol',
          },
          {
            label: 'Community Builders',
            to: 'https://builders.devprotocol.xyz/',
          },
        ],
  },
  {
          title: "Developers",
          items: [
          {
              label: "Get Started",
              to: "https://devprotocol.xyz/developers"
          },
          {
              label: "Solve Bounty",
              to: "https://app.chainwhiz.app/explore"
          },
          {
            label: "Join Community",
            to: "https://github.com/dev-protocol/community/issues/new?assignees=&labels=github-invitation&template=invitation.yml&title=Please+invite+me+to+the+community"
          }
      ]
      },
      {
      title: "Products",
      items: [
      {
          label: "Stakes.social",
          to: "https://stakes.social/"
      },
      {
          label: "Khaos Oracle",
          to: "https://github.com/dev-protocol/khaos"
      },
      {
        label: "Dev Kit",
        to: "https://github.com/dev-protocol/dev-kit-js"
     },
      {
        label: "About Us",
        to: "https://devprotocol.xyz/about"
      },
  ]
  },
],
logo: {
  alt: 'Dev Protocol Logo',
  src: 'img/devprotocol-logo.png',
  href: 'https://devprotocol.xyz',
},
copyright: `Copyright © ${new Date().getFullYear()} Dev Protocol`
},
announcementBar: {
id: "Community Shop",
content:
'🎉 Checkout our <a target="_blank" rel="noopener noreferrer" href="https://shop.devprotocol.xyz/">Community Shop</a> 🎉! ',
backgroundColor: "#5E8EF4",
textColor: "#fff",
},
prism: {
theme: lightCodeTheme,
darkTheme: darkCodeTheme,
},
// algolia: {
//   appId: 'XXXXXX',
//   apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXX",
//   indexName: "XXXXXX",
//   algoliaOptions: {},
// }
 }),
};

module.exports = config;
