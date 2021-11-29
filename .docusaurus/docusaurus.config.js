export default {
  "title": "Hackers Hub",
  "tagline": "Learn Ethical Hacking from Scratch",
  "url": "https://hackers-hub.com",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "throw",
  "favicon": "img/favicon.png",
  "organizationName": "Abhi6722",
  "projectName": "hackers-hub",
  "customFields": {
    "repoUrl": "https://github.com/Abhi6722/hackers-hub"
  },
  "themeConfig": {
    "image": "img/logo-webdriver-io.png",
    "metadatas": [
      {
        "name": "twitter:card",
        "content": "summary"
      }
    ],
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": true,
      "switchConfig": {
        "darkIcon": "🌜",
        "lightIcon": "☀️",
        "darkIconStyle": {
          "marginLeft": "2px"
        },
        "lightIconStyle": {
          "marginLeft": "1px"
        }
      }
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
    "googleAnalytics": {
      "trackingID": "UA-47063382-1"
    },
    "algolia": {
      "apiKey": "1b22fa823f22b7916528edc0e36d9d4a",
      "indexName": "webdriver",
      "appId": "BH4D9OD16A",
      "contextualSearch": false,
      "searchParameters": {}
    },
    "announcementBar": {
      "id": "supportus",
      "content": "⭐️  &nbsp; If you like Hackers Hub, give it a star on <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/Abhi6722/hackers-hub\">GitHub</a>! ⭐️",
      "isCloseable": true
    },
    "navbar": {
      "logo": {
        "alt": "Hackers Hub",
        "src": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNjRweCIgaGVpZ2h0PSI2NHB4IiB2aWV3Qm94PSIwIDAgNjQgNjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+TG9nbyBSZWd1bGFyPC90aXRsZT4KICAgIDxnIGlkPSJMb2dvLVJlZ3VsYXIiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIGZpbGw9IiNFQTU5MDYiIHg9IjAiIHk9IjAiIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgcng9IjUiPjwvcmVjdD4KICAgICAgICA8cGF0aCBkPSJNOCwxNiBMOCw0OCBMNiw0OCBMNiwxNiBMOCwxNiBaIE00MywxNiBDNTEuODM2NTU2LDE2IDU5LDIzLjE2MzQ0NCA1OSwzMiBDNTksNDAuODM2NTU2IDUxLjgzNjU1Niw0OCA0Myw0OCBDMzQuMTYzNDQ0LDQ4IDI3LDQwLjgzNjU1NiAyNywzMiBDMjcsMjMuMTYzNDQ0IDM0LjE2MzQ0NCwxNiA0MywxNiBaIE0yNywxNiBMMTQuMTA2LDQ3Ljk5OTIwNzggTDExLjk5OSw0Ny45OTkyMDc4IEwyNC44OTQsMTYgTDI3LDE2IFogTTQzLDE4IEMzNS4yNjgwMTM1LDE4IDI5LDI0LjI2ODAxMzUgMjksMzIgQzI5LDM5LjczMTk4NjUgMzUuMjY4MDEzNSw0NiA0Myw0NiBDNTAuNzMxOTg2NSw0NiA1NywzOS43MzE5ODY1IDU3LDMyIEM1NywyNC4yNjgwMTM1IDUwLjczMTk4NjUsMTggNDMsMTggWiIgaWQ9IkNvbWJpbmVkLVNoYXBlIiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+CiAgICA8L2c+Cjwvc3ZnPg==",
        "srcDark": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNjRweCIgaGVpZ2h0PSI2NHB4IiB2aWV3Qm94PSIwIDAgNjQgNjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+TG9nbyBSZWd1bGFyPC90aXRsZT4KICAgIDxnIGlkPSJMb2dvLVJlZ3VsYXIiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIGZpbGw9IiNFQTU5MDYiIHg9IjAiIHk9IjAiIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgcng9IjUiPjwvcmVjdD4KICAgICAgICA8cGF0aCBkPSJNOCwxNiBMOCw0OCBMNiw0OCBMNiwxNiBMOCwxNiBaIE00MywxNiBDNTEuODM2NTU2LDE2IDU5LDIzLjE2MzQ0NCA1OSwzMiBDNTksNDAuODM2NTU2IDUxLjgzNjU1Niw0OCA0Myw0OCBDMzQuMTYzNDQ0LDQ4IDI3LDQwLjgzNjU1NiAyNywzMiBDMjcsMjMuMTYzNDQ0IDM0LjE2MzQ0NCwxNiA0MywxNiBaIE0yNywxNiBMMTQuMTA2LDQ3Ljk5OTIwNzggTDExLjk5OSw0Ny45OTkyMDc4IEwyNC44OTQsMTYgTDI3LDE2IFogTTQzLDE4IEMzNS4yNjgwMTM1LDE4IDI5LDI0LjI2ODAxMzUgMjksMzIgQzI5LDM5LjczMTk4NjUgMzUuMjY4MDEzNSw0NiA0Myw0NiBDNTAuNzMxOTg2NSw0NiA1NywzOS43MzE5ODY1IDU3LDMyIEM1NywyNC4yNjgwMTM1IDUwLjczMTk4NjUsMTggNDMsMTggWiIgaWQ9IkNvbWJpbmVkLVNoYXBlIiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+CiAgICA8L2c+Cjwvc3ZnPg=="
      },
      "items": [
        {
          "type": "doc",
          "label": "Docs",
          "position": "left",
          "docId": "gettingstarted"
        },
        {
          "type": "doc",
          "label": "API",
          "position": "left",
          "docId": "api"
        },
        {
          "to": "blog",
          "label": "Blog",
          "position": "left"
        },
        {
          "type": "doc",
          "label": "Contribute",
          "position": "left",
          "docId": "contribute"
        },
        {
          "to": "/community/support",
          "label": "Community",
          "position": "left",
          "activeBaseRegex": "/community/"
        },
        {
          "label": "v1",
          "position": "right",
          "to": "/versions"
        },
        {
          "href": "https://github.com/Abhi6722/hackers-hub",
          "position": "right",
          "className": "header-github-link",
          "aria-label": "GitHub repository"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Getting Started",
              "to": "docs/gettingstarted"
            },
            {
              "label": "API Reference",
              "to": "docs/api"
            },
            {
              "label": "Contribute",
              "to": "docs/contribute/"
            },
            {
              "label": "Help",
              "to": "community/support"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Stack Overflow",
              "href": "https://stackoverflow.com/c/hackers-hub/questions"
            },
            {
              "label": "Support Chat",
              "href": "https://gitter.im/official-hackers-hub/community"
            },
            {
              "label": "Discord",
              "href": "https://discord.gg/DXUFvjCR"
            },
            {
              "label": "Twitter",
              "href": "https://twitter.com/hackers_hub"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "Courses",
              "to": "https://hackers-hub.com/courses/"
            },
            {
              "label": "Books",
              "href": "https://hackers-hub.com/shop/"
            },
            {
              "label": "Blog",
              "to": "blog"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/Abhi6722/hackers-hub"
            }
          ]
        }
      ],
      "logo": {
        "alt": "OpenJS Foundation Logo",
        "src": "/img/footerlogo.png",
        "href": "https://hackers-hub.com/"
      },
      "copyright": "Copyright © 2021 Hackers Hub"
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "hideableSidebar": false,
    "tableOfContents": {
      "minHeadingLevel": 2,
      "maxHeadingLevel": 3
    }
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/Users/abhi/Desktop/hackers-hub/sidebars.js",
          "editUrl": "https://github.com/Abhi6722/hackers-hub/edit/main/website/",
          "remarkPlugins": [
            [
              null,
              {
                "sync": true
              }
            ]
          ],
          "include": [
            "**/*.{md,mdx}",
            "**/_*.{md,mdx}"
          ],
          "exclude": [
            "**/_*/**",
            "**/*.test.{js,jsx,ts,tsx}",
            "**/__tests__/**"
          ]
        },
        "blog": {
          "showReadingTime": true,
          "postsPerPage": 3,
          "editUrl": "https://github.com/Abhi6722/hackers-hub/edit/main/website/blog/"
        },
        "theme": {
          "customCss": "/Users/abhi/Desktop/hackers-hub/src/css/custom.css"
        },
        "pages": {
          "remarkPlugins": [
            null
          ]
        }
      }
    ]
  ],
  "plugins": [
    [
      "@docusaurus/plugin-client-redirects",
      {
        "fromExtensions": [
          "html"
        ]
      }
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        "id": "community",
        "path": "community",
        "editUrl": "https://github.com/Abhi6722/hackers-hub/edit/main/website/",
        "routeBasePath": "community",
        "sidebarPath": "/Users/abhi/Desktop/hackers-hub/sidebarsCommunity.js"
      }
    ],
    "@docusaurus/plugin-ideal-image",
    [
      "@docusaurus/plugin-pwa",
      {
        "debug": false,
        "offlineModeActivationStrategies": [
          "appInstalled",
          "queryString"
        ],
        "swCustom": "/Users/abhi/Desktop/hackers-hub/src/sw.js",
        "pwaHead": [
          {
            "tagName": "link",
            "rel": "icon",
            "href": "img/logo-webdriver-io.png"
          },
          {
            "tagName": "link",
            "rel": "manifest",
            "href": "/manifest.json"
          },
          {
            "tagName": "meta",
            "name": "theme-color",
            "content": "rgb(234, 90, 7)"
          },
          {
            "tagName": "meta",
            "name": "apple-mobile-web-app-capable",
            "content": "yes"
          },
          {
            "tagName": "meta",
            "name": "apple-mobile-web-app-status-bar-style",
            "content": "#000"
          },
          {
            "tagName": "link",
            "rel": "apple-touch-icon",
            "href": "img/logo-webdriver-io.png"
          },
          {
            "tagName": "link",
            "rel": "mask-icon",
            "href": "img/logo-webdriver-io.svg",
            "color": "rgb(234, 90, 7)"
          },
          {
            "tagName": "meta",
            "name": "msapplication-TileImage",
            "content": "img/logo-webdriver-io.png"
          },
          {
            "tagName": "meta",
            "name": "msapplication-TileColor",
            "content": "#000"
          }
        ]
      }
    ]
  ],
  "themes": [
    "@saucelabs/theme-github-codeblock"
  ],
  "stylesheets": [
    "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;600&display=block",
    "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600&display=block"
  ],
  "scripts": [
    "https://buttons.github.io/buttons.js"
  ],
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "titleDelimiter": "|",
  "noIndex": false
};