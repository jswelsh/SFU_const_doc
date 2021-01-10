module.exports = {
  title: 'Rugby',
  tagline: 'Something something something SFU Rugby',
  url: 'https://test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'SFU Rugby',
  projectName: 'Constitution',
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Constitution',
          position: 'left',
        },
        {
          href: 'https://sfurugby.com/',
          label: 'SFU Rugby Website',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'By-laws',
          items: [
            {
              label: 'membership',
              to: 'docs/bylaws/membership',
            },{
              label: 'Meetings',
              to: 'docs/bylaws/meetings',
            },{
              label: 'Organisation',
              to: 'docs/bylaws/organisation',
            },{
              label: 'Finance',
              to: 'docs/bylaws/finance',
            },{
              label: 'Miscellaneous',
              to: 'docs/bylaws/miscellaneous',
            },{
              label: 'Dissolution',
              to: 'docs/bylaws/dissolution',
            },{
              label: 'Discipline',
              to: 'docs/bylaws/discipline',
            },{
              label: 'Rep-Player',
              to: 'docs/bylaws/repPlayers',
            },
          ],
        },
        {
          title: 'Governing Bodies',
          items: [
            {
              label: 'BC Rugby Policies',
              href: 'https://www.bcrugby.com/policies/',
            },
            {
              label: 'Rugby Canada Policies',
              href: 'https://rugby.ca/en/about/governance',
            },{
              label: 'SFU Athletics Policies',
              href: 'https://www.sfu.ca/students/recreation/contact/codes-of-conduct/sports-code-of-conduct.html',
            }
          ],
        },
        {
/*           title: 'More',
          items: [
            {
              label: 'SFU Rugby Website',
              href: 'https://sfurugby.com/',
            },
          ], */
        },
      ],
      // copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: "mailto:exec-rugby@sfu.ca",
          // Please change this to your repo.
        },
/*         blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        }, */
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
