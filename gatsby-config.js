const { name } = require('./package.json');

module.exports = {
  pathPrefix: process.env.CI ? `/${name}` : `/`,
  siteMetadata: {
    author: 'Nathan Hahn',
    title: `Nathan's Personal Website`,
    description: `The personal website of PhD student Nathan Hahn`
  },
  plugins: [
    'gatsby-plugin-react-next',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          'gatsby-remark-autolink-headers'
        ]
      }
    },
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-46748250-1`,
      },
    },
    `gatsby-plugin-feed`,
    `gatsby-plugin-offline`,
    'gatsby-plugin-antd',
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `Nathan Hahn's Website`,
        description: 'The personal website of PhD student Nathan Hahn',
        short_name: 'NHahn Site',
        background_color: 'white',
        start_url: "/",
        theme_color: '#002635',
        orientation: 'portrait',
        display: 'minimal-ui',
        icon: `${__dirname}/static/favicon.jpg`,
        icons: [
          {
            src: `/favicons/android-chrome-192x192.jpg`,
            sizes: `192x192`,
            type: `image/jpg`,
          },
          {
            src: `/favicons/android-chrome-512x512.jpg`,
            sizes: `512x512`,
            type: `image/jpg`,
          },
        ],
      }
    }
  ]
}
