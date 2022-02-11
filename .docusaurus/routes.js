
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','3d6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','914'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','c28'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','0da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','244'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/next',
    component: ComponentCreator('/next','941'),
    routes: [
      {
        path: '/next/',
        component: ComponentCreator('/next/','f7b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/next/developers/',
        component: ComponentCreator('/next/developers/','5d6'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/next/developers/dev-faucet',
        component: ComponentCreator('/next/developers/dev-faucet','056'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/next/developers/ecosystem-addresses',
        component: ComponentCreator('/next/developers/ecosystem-addresses','8bc'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/next/developers/modules/overview',
        component: ComponentCreator('/next/developers/modules/overview','34e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/next/developers/modules/v1/dev',
        component: ComponentCreator('/next/developers/modules/v1/dev','e60'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/next/developers/modules/v1/market',
        component: ComponentCreator('/next/developers/modules/v1/market','f74'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/next/developers/modules/v1/property',
        component: ComponentCreator('/next/developers/modules/v1/property','71a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/next/developers/modules/v1/s-token-manager',
        component: ComponentCreator('/next/developers/modules/v1/s-token-manager','f52'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/next/developers/modules/v2/s-token-manager',
        component: ComponentCreator('/next/developers/modules/v2/s-token-manager','234'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/next/developers/tools/data-viewer',
        component: ComponentCreator('/next/developers/tools/data-viewer','c27'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/next/developers/tools/dev-kit',
        component: ComponentCreator('/next/developers/tools/dev-kit','b51'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/next/developers/tools/interfaces',
        component: ComponentCreator('/next/developers/tools/interfaces','b59'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/next/developers/tools/khaos-core',
        component: ComponentCreator('/next/developers/tools/khaos-core','ad1'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/next/developers/tools/khaos-kit',
        component: ComponentCreator('/next/developers/tools/khaos-kit','a10'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/next/developers/tools/khaos-starter-kit',
        component: ComponentCreator('/next/developers/tools/khaos-starter-kit','d22'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/next/developers/tools/util-contracts',
        component: ComponentCreator('/next/developers/tools/util-contracts','863'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/next/developers/tools/util-ts',
        component: ComponentCreator('/next/developers/tools/util-ts','9ea'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/next/Introduction/',
        component: ComponentCreator('/next/Introduction/','7a8'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/next/Introduction/creatortoken',
        component: ComponentCreator('/next/Introduction/creatortoken','27d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/next/Introduction/dev-ecosystem',
        component: ComponentCreator('/next/Introduction/dev-ecosystem','3ab'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/next/Introduction/devtoken',
        component: ComponentCreator('/next/Introduction/devtoken','bc1'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/next/Introduction/what-is-devprotocol',
        component: ComponentCreator('/next/Introduction/what-is-devprotocol','532'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/next/khaos/',
        component: ComponentCreator('/next/khaos/','b84'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/next/khaos/authentication-and-oraclization',
        component: ComponentCreator('/next/khaos/authentication-and-oraclization','6d0'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/next/learning/ethereum',
        component: ComponentCreator('/next/learning/ethereum','aa6'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/next/learning/Hands-on/guide',
        component: ComponentCreator('/next/learning/Hands-on/guide','281'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/next/learning/Hands-on/hands-on 1',
        component: ComponentCreator('/next/learning/Hands-on/hands-on 1','33e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/next/learning/Hands-on/hands-on 2',
        component: ComponentCreator('/next/learning/Hands-on/hands-on 2','db5'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/next/learning/Hands-on/hands-on 3',
        component: ComponentCreator('/next/learning/Hands-on/hands-on 3','631'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/next/learning/token',
        component: ComponentCreator('/next/learning/token','62b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/next/protocol/governance/',
        component: ComponentCreator('/next/protocol/governance/','654'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/next/protocol/governance/dips',
        component: ComponentCreator('/next/protocol/governance/dips','060'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/next/protocol/governance/upgrading-core-modules',
        component: ComponentCreator('/next/protocol/governance/upgrading-core-modules','bff'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/next/protocol/governance/upgrading-predefined-variables',
        component: ComponentCreator('/next/protocol/governance/upgrading-predefined-variables','586'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/next/protocol/whitepaper',
        component: ComponentCreator('/next/protocol/whitepaper','0c9'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/next/stakes-social/',
        component: ComponentCreator('/next/stakes-social/','f70'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/next/stakes-social/how-to-attach-image',
        component: ComponentCreator('/next/stakes-social/how-to-attach-image','225'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/next/stakes-social/how-to-buy-dev',
        component: ComponentCreator('/next/stakes-social/how-to-buy-dev','f87'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/next/stakes-social/how-to-move-funds',
        component: ComponentCreator('/next/stakes-social/how-to-move-funds','fad'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/next/stakes-social/how-to-onboard-arbitrum',
        component: ComponentCreator('/next/stakes-social/how-to-onboard-arbitrum','0e9'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/next/stakes-social/how-to-onboard-polygon',
        component: ComponentCreator('/next/stakes-social/how-to-onboard-polygon','a8c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/next/stakes-social/how-to-stake',
        component: ComponentCreator('/next/stakes-social/how-to-stake','0df'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/next/stakes-social/onboard-guide',
        component: ComponentCreator('/next/stakes-social/onboard-guide','647'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/','8d4'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/','0be'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/developers/',
        component: ComponentCreator('/developers/','cb8'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/developers/dev-faucet',
        component: ComponentCreator('/developers/dev-faucet','209'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/developers/ecosystem-addresses',
        component: ComponentCreator('/developers/ecosystem-addresses','900'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/developers/modules/overview',
        component: ComponentCreator('/developers/modules/overview','02a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/developers/modules/v1/dev',
        component: ComponentCreator('/developers/modules/v1/dev','8d3'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/developers/modules/v1/market',
        component: ComponentCreator('/developers/modules/v1/market','fd6'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/developers/modules/v1/property',
        component: ComponentCreator('/developers/modules/v1/property','20c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/developers/modules/v1/s-token-manager',
        component: ComponentCreator('/developers/modules/v1/s-token-manager','122'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/developers/modules/v2/s-token-manager',
        component: ComponentCreator('/developers/modules/v2/s-token-manager','35f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/developers/tools/data-viewer',
        component: ComponentCreator('/developers/tools/data-viewer','9be'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/developers/tools/dev-kit',
        component: ComponentCreator('/developers/tools/dev-kit','f1f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/developers/tools/interfaces',
        component: ComponentCreator('/developers/tools/interfaces','7c8'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/developers/tools/khaos-core',
        component: ComponentCreator('/developers/tools/khaos-core','737'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/developers/tools/khaos-kit',
        component: ComponentCreator('/developers/tools/khaos-kit','474'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/developers/tools/khaos-starter-kit',
        component: ComponentCreator('/developers/tools/khaos-starter-kit','8a0'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/developers/tools/util-contracts',
        component: ComponentCreator('/developers/tools/util-contracts','8bf'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/developers/tools/util-ts',
        component: ComponentCreator('/developers/tools/util-ts','0a1'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Introduction/',
        component: ComponentCreator('/Introduction/','29c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Introduction/creatortoken',
        component: ComponentCreator('/Introduction/creatortoken','4a4'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Introduction/dev-ecosystem',
        component: ComponentCreator('/Introduction/dev-ecosystem','bf0'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Introduction/devtoken',
        component: ComponentCreator('/Introduction/devtoken','267'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Introduction/what-is-devprotocol',
        component: ComponentCreator('/Introduction/what-is-devprotocol','f91'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/khaos/',
        component: ComponentCreator('/khaos/','dbf'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/khaos/authentication-and-oraclization',
        component: ComponentCreator('/khaos/authentication-and-oraclization','7e9'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/learning/ethereum',
        component: ComponentCreator('/learning/ethereum','28f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/learning/Hands-on/guide',
        component: ComponentCreator('/learning/Hands-on/guide','2ae'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/learning/Hands-on/hands-on 1',
        component: ComponentCreator('/learning/Hands-on/hands-on 1','ccb'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/learning/Hands-on/hands-on 2',
        component: ComponentCreator('/learning/Hands-on/hands-on 2','386'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/learning/Hands-on/hands-on 3',
        component: ComponentCreator('/learning/Hands-on/hands-on 3','a23'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/learning/token',
        component: ComponentCreator('/learning/token','b38'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/protocol/governance/',
        component: ComponentCreator('/protocol/governance/','08c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/protocol/governance/dips',
        component: ComponentCreator('/protocol/governance/dips','1df'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/protocol/governance/upgrading-core-modules',
        component: ComponentCreator('/protocol/governance/upgrading-core-modules','9df'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/protocol/governance/upgrading-predefined-variables',
        component: ComponentCreator('/protocol/governance/upgrading-predefined-variables','bd3'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/protocol/whitepaper',
        component: ComponentCreator('/protocol/whitepaper','109'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/stakes-social/',
        component: ComponentCreator('/stakes-social/','c54'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/stakes-social/how-to-attach-image',
        component: ComponentCreator('/stakes-social/how-to-attach-image','aaf'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/stakes-social/how-to-buy-dev',
        component: ComponentCreator('/stakes-social/how-to-buy-dev','d83'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/stakes-social/how-to-move-funds',
        component: ComponentCreator('/stakes-social/how-to-move-funds','9aa'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/stakes-social/how-to-onboard-arbitrum',
        component: ComponentCreator('/stakes-social/how-to-onboard-arbitrum','d2a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/stakes-social/how-to-onboard-polygon',
        component: ComponentCreator('/stakes-social/how-to-onboard-polygon','b85'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/stakes-social/how-to-stake',
        component: ComponentCreator('/stakes-social/how-to-stake','a79'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/stakes-social/onboard-guide',
        component: ComponentCreator('/stakes-social/onboard-guide','f8d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
