require('dotenv').config();

const contributingPages = {
  'contributing': {
    id: 'contributing',
    name: 'contributing',
    path: '/contributing',
    file: 'Contributing.md'
  },
  'terms-and-conditions': {
    id: 'terms-and-conditions',
    name: 'contributing-document',
    path: '/contributing/terms-and-conditions',
    file: 'Terms-and-conditions.md'
  },
  'java-coding-guidelines': {
    id: 'java-coding-guidelines',
    name: 'contributing-document',
    path: '/contributing/java-coding-guidelines',
    file: 'Java-coding-guidelines.md'
  },
  'css-coding-guidelines': {
    id: 'css-coding-guidelines',
    name: 'contributing-document',
    path: '/contributing/css-coding-guidelines',
    file: 'CSS-coding-guidelines.md'
  },
  'html-coding-guidelines': {
    id: 'html-coding-guidelines',
    name: 'contributing-document',
    path: '/contributing/html-coding-guidelines',
    file: 'HTML-coding-guidelines.md'
  },
  'javascript-coding-guidelines': {
    id: 'javascript-coding-guidelines',
    name: 'contributing-document',
    path: '/contributing/javascript-coding-guidelines',
    file: 'JavaScript-coding-guidelines.md'
  },
  'typescript-coding-guidelines': {
    id: 'typescript-coding-guidelines',
    name: 'contributing-document',
    path: '/contributing/typescript-coding-guidelines',
    file: 'TypeScript-coding-guidelines.md'
  }
};
const contributingRoutes = [
  contributingPages.contributing,
  contributingPages['terms-and-conditions'],
  contributingPages['java-coding-guidelines'],
  contributingPages['javascript-coding-guidelines'],
  contributingPages['typescript-coding-guidelines'],
  contributingPages['css-coding-guidelines'],
  contributingPages['html-coding-guidelines']
]
.map((route) => {
  const { id, name, path } = route;

  return {
    id,
    name,
    path
  };
});
const contributingSidebarTree = [
  contributingPages.contributing,
  contributingPages['terms-and-conditions'],
  {
    id: 'coding-style-guidelines',
    children: [
      contributingPages['java-coding-guidelines'],
      contributingPages['javascript-coding-guidelines'],
      contributingPages['typescript-coding-guidelines'],
      contributingPages['css-coding-guidelines'],
      contributingPages['html-coding-guidelines']
    ]
    .map((tree) => {
      const { id, name, children } = tree;

      return {
        id,
        name,
        children
      };
    })
  }
];

module.exports = {
  api: {
    host: process.env.API_HOST || 'https://github.api.adidas.com',
    key: process.env.API_KEY || 'xy3jxpv3cvc8skw85mjgvxdu'
  },
  contributing: {
    baseUrl: 'https://raw.githubusercontent.com/wiki/adidas/adidas-contribution-guidelines',
    pages: contributingPages,
    routes: contributingRoutes,
    sidebarTree: contributingSidebarTree
  }
};
