/*
AUTOGENERATED - DON'T EDIT
Your edits in this file will be overwritten in the next build!
Modify the docusaurus.config.js file at your site's root instead.
*/
export default {
  "onBrokenLinks": "log",
  "title": "Dev Protocol Documentation",
  "tagline": "Decentralized Creator Economy",
  "url": "https://docs.devprotocol.xyz",
  "baseUrl": "/",
  "favicon": "img/favicon.ico",
  "organizationName": "Dev Protocol",
  "projectName": "docs.devprotocol.xyz",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/Users/akira/frame00/docs.devprotocol.xyz/sidebars.js",
          "editUrl": "https://github.com/dev-protocol/docs.devprotocol.xyz",
          "routeBasePath": "/"
        },
        "theme": {
          "customCss": "/Users/akira/frame00/docs.devprotocol.xyz/src/css/custom.css"
        }
      }
    ]
  ],
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en",
      "ja",
      "pt"
    ],
    "localeConfigs": {
      "en": {
        "label": "English",
        "direction": "ltr"
      },
      "ja": {
        "label": "Japanese",
        "direction": "ltr"
      },
      "pt": {
        "label": "Português",
        "direction": "ltr"
      }
    }
  },
  "themeConfig": {
    "autoCollapseSidebarCategories": true,
    "hideableSidebar": true,
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": true,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "navbar": {
      "hideOnScroll": true,
      "logo": {
        "alt": "Dev Protocol logo",
        "src": "/img/Lightmode.svg",
        "srcDark": "/img/Darkmode.svg"
      },
      "items": [
        {
          "to": "/Introduction/",
          "label": "The Protocol",
          "position": "left"
        },
        {
          "to": "/stakes-social/",
          "label": "Stakes Social",
          "position": "left"
        },
        {
          "to": "/developers/",
          "label": "Developers",
          "position": "left"
        },
        {
          "type": "dropdown",
          "label": "Community",
          "position": "left",
          "items": [
            {
              "label": "Medium Page",
              "to": "https://medium.com/devprtcl"
            },
            {
              "label": "Blog",
              "to": "https://initto.devprotocol.xyz/en/"
            },
            {
              "label": "GitHub",
              "to": "https://github.com/dev-protocol"
            },
            {
              "label": "Twitter",
              "to": "https://twitter.com/devprtcl"
            },
            {
              "label": "Discord",
              "to": "https://discord.com/invite/VwJp4KM"
            },
            {
              "label": "Forum",
              "to": "https://community.devprotocol.xyz/"
            },
            {
              "label": "Community Builders",
              "to": "https://builders.devprotocol.xyz/"
            }
          ]
        },
        {
          "type": "docsVersionDropdown",
          "position": "right",
          "dropdownItemsBefore": [],
          "dropdownItemsAfter": []
        },
        {
          "type": "localeDropdown",
          "position": "right",
          "dropdownItemsBefore": [],
          "dropdownItemsAfter": []
        },
        {
          "href": "https://github.com/dev-protocol",
          "position": "right",
          "className": "header-github-link",
          "aria-label": "GitHub repository"
        }
      ]
    },
    "footer": {
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Home",
              "to": "/"
            },
            {
              "label": "Getting Started",
              "to": "/introduction/"
            },
            {
              "label": "Tutorials",
              "to": "https://initto.devprotocol.xyz/en/"
            },
            {
              "label": "Support",
              "to": "https://ctt.ac/CEchF"
            },
            {
              "label": "FAQs",
              "to": "https://devprotocol.xyz/faq"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Discord",
              "to": "https://discord.com/invite/VwJp4KM"
            },
            {
              "label": "Forum",
              "to": "https://community.devprotocol.xyz/"
            },
            {
              "label": "Twitter",
              "to": "https://twitter.com/devprtcl"
            },
            {
              "label": "Youtube",
              "to": "https://www.youtube.com/channel/UCN7m74tFgJJnoGL4zk6aJ6g"
            },
            {
              "label": "GitHub",
              "to": "https://github.com/dev-protocol"
            },
            {
              "label": "Community Builders",
              "to": "https://builders.devprotocol.xyz/"
            }
          ]
        },
        {
          "title": "Developers",
          "items": [
            {
              "label": "Get Started",
              "to": "https://devprotocol.xyz/developers"
            },
            {
              "label": "Solve Bounty",
              "to": "https://app.chainwhiz.app/explore"
            },
            {
              "label": "Join Community",
              "to": "https://github.com/dev-protocol/community/issues/new?assignees=&labels=github-invitation&template=invitation.yml&title=Please+invite+me+to+the+community"
            }
          ]
        },
        {
          "title": "Products",
          "items": [
            {
              "label": "Stakes.social",
              "to": "https://stakes.social/"
            },
            {
              "label": "Khaos Oracle",
              "to": "https://github.com/dev-protocol/khaos"
            },
            {
              "label": "Dev Kit",
              "to": "https://github.com/dev-protocol/dev-kit-js"
            },
            {
              "label": "About Us",
              "to": "https://devprotocol.xyz/about"
            }
          ]
        }
      ],
      "logo": {
        "alt": "Dev Protocol Logo",
        "src": "img/devprotocol-logo.png",
        "href": "https://devprotocol.xyz"
      },
      "copyright": "Copyright © 2022 Dev Protocol",
      "style": "light"
    },
    "announcementBar": {
      "id": "Community Shop",
      "content": "🎉 Checkout our <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://shop.devprotocol.xyz/\">Community Shop</a> 🎉! ",
      "backgroundColor": "#5E8EF4",
      "textColor": "#fff",
      "isCloseable": true
    },
    "prism": {
      "theme": {
        "plain": {
          "color": "#393A34",
          "backgroundColor": "#f6f8fa"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "doctype",
              "cdata"
            ],
            "style": {
              "color": "#999988",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "opacity": 0.7
            }
          },
          {
            "types": [
              "string",
              "attr-value"
            ],
            "style": {
              "color": "#e3116c"
            }
          },
          {
            "types": [
              "punctuation",
              "operator"
            ],
            "style": {
              "color": "#393A34"
            }
          },
          {
            "types": [
              "entity",
              "url",
              "symbol",
              "number",
              "boolean",
              "variable",
              "constant",
              "property",
              "regex",
              "inserted"
            ],
            "style": {
              "color": "#36acaa"
            }
          },
          {
            "types": [
              "atrule",
              "keyword",
              "attr-name",
              "selector"
            ],
            "style": {
              "color": "#00a4db"
            }
          },
          {
            "types": [
              "function",
              "deleted",
              "tag"
            ],
            "style": {
              "color": "#d73a49"
            }
          },
          {
            "types": [
              "function-variable"
            ],
            "style": {
              "color": "#6f42c1"
            }
          },
          {
            "types": [
              "tag",
              "selector",
              "keyword"
            ],
            "style": {
              "color": "#00009f"
            }
          }
        ]
      },
      "darkTheme": {
        "plain": {
          "color": "#F8F8F2",
          "backgroundColor": "#282A36"
        },
        "styles": [
          {
            "types": [
              "prolog",
              "constant",
              "builtin"
            ],
            "style": {
              "color": "rgb(189, 147, 249)"
            }
          },
          {
            "types": [
              "inserted",
              "function"
            ],
            "style": {
              "color": "rgb(80, 250, 123)"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "color": "rgb(255, 85, 85)"
            }
          },
          {
            "types": [
              "changed"
            ],
            "style": {
              "color": "rgb(255, 184, 108)"
            }
          },
          {
            "types": [
              "punctuation",
              "symbol"
            ],
            "style": {
              "color": "rgb(248, 248, 242)"
            }
          },
          {
            "types": [
              "string",
              "char",
              "tag",
              "selector"
            ],
            "style": {
              "color": "rgb(255, 121, 198)"
            }
          },
          {
            "types": [
              "keyword",
              "variable"
            ],
            "style": {
              "color": "rgb(189, 147, 249)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(98, 114, 164)"
            }
          },
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "rgb(241, 250, 140)"
            }
          }
        ]
      },
      "additionalLanguages": []
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadata": [],
    "tableOfContents": {
      "minHeadingLevel": 2,
      "maxHeadingLevel": 3
    }
  },
  "baseUrlIssueBanner": true,
  "onBrokenMarkdownLinks": "warn",
  "onDuplicateRoutes": "warn",
  "staticDirectories": [
    "static"
  ],
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};