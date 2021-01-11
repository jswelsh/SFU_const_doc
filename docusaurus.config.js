module.exports = {
  title: 'SFU Rugby',
  tagline: "Your totally constitutionally elected executive team!",
  url: 'https://test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.svg',
  organizationName: 'SFU Rugby',
  projectName: 'Constitution',
  themeConfig: {
    navbar: {
      title: '',
      style: 'primary',
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
        },{
          title: 'Rugby Canada Docs',
          items: [
            {
              label: 'Policies Page',
              href: 'https://rugby.ca/en/about/governance'
            },{
              label: 'By-laws',
              href: 'https://rugby.ca/uploads/about/By-Laws/RugbyCanadaRevisedBy-lawsDev_POL_20200828.pdf'
            },{
              label: 'Harassment and Bullying',
              href: 'https://rugby.ca/uploads/attachments/files/RC_Harassment_and_Bullying_Policy.pdf'
            },{
              label: 'Registration Refund',
              href: 'https://rugby.ca/uploads/about/By-Laws/RegistrationRefund_DEV_POL_20200730_Final_Eng.pdf'
            }
          ],
        },{
          title: 'BC Rugby Docs',
          items: [
            {
              label: 'Policies Page',
              href: 'https://www.bcrugby.com/policies/',
            },{
              label: 'Constitution',
              href: 'https://www.bcrugby.com/wp-content/uploads/2020/07/BC-Rugby-Certified-Constitution-Bylaws-Member-Approved-July10-2017.pdf',
            },{
              label: 'Code of Conduct',
              href: 'https://www.bcrugby.com/wp-content/uploads/2020/07/BC-Rugby-Code-of-Conduct-Approved-Nov19-2016.pdf',
            },{
              label: 'Discipline Policy',
              href: 'http://www.bcrugby.com/wp-content/uploads/2018/09/Discipline-Policy-2018-09-01.pdf',
            },{
              label: 'Appeals Policy',
              href: 'https://www.bcrugby.com/wp-content/uploads/2020/07/BC-Rugby-Appeals-Policy-Approved-May-162018.pdf',
            }
          ],
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
          // editUrl: "mailto:exec-rugby@sfu.ca",
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
