module.exports = {
  url: process.env.URL || 'http://localhost:8080',
  siteName: 'George McEntegart',
  siteDescription:
    'Helping solopreneurs and creators understand their audience and grow website traffic',
  siteType: 'Person', // schema
  locale: 'en_EN',
  lang: 'en',
  skipContent: 'Skip to content',
  author: 'George McEntegart', // i.e. Lene Saile - author's name. Must be set.
  authorEmail: 'contact@georgemc.net', // i.e. hola@lenesaile.com - email of the author
  authorWebsite: 'https://georgemc.net', // i.e. https.://www.lenesaile.com - the personal site of the author
  themeColor: '#557a95', //  Manifest: defines the default theme color for the application
  themeBgColor: '#F3F3F3', // Manifest: defines a placeholder background color for the application page to display before its stylesheet is loaded
  meta_data: {
    opengraph_default: '/assets/images/opengraph-default.jpg',
    twitterSite: '@geerodge', // i.e. @site - twitter profile of the site
    twitterCreator: '@geerodge', // i.e. @author -  twitter profile of the site
    mastodonProfile: '' // i.e. https://front-end.social/@lene - url to your mastodon instance/profile
  },
  blog: {
    // this is for the rss feed
    name: 'Audience and Traffic Growth for Solopreneurs and Creators',
    description:
      'Helping solopreneurs and creators maximise website visibility through audience insight.'
  },
  pagination: {
    itemsPerPage: 20
  },
  address: {
    // edit all presets or leave empty. They are being used in the pages for privacy.md and imprint.md
    name: 'George McEntegart',
    street: '80 Westcourt Road',
    town: 'Worthing',
    county: 'West Sussex',
    postcode: 'BN14 7DP',
    mobileDisplay: '+44 7899890634',
    mobileCall: '+447899890634',
    email: 'contact@georgemc.net',
    cif: ''
  },
  menu: {
    closedText: 'Menu'
  }
};
