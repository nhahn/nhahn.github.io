const { name } = require('./package.json');

module.exports = {
  siteMetadata: {
    author: 'Nathan Hahn',
    title: `Nathan's Personal Website`,
    description: `The personal website of PhD student Nathan Hahn`

  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-transformer-hjson`,
    `gatsby-transformer-yaml`,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          'gatsby-remark-autolink-headers',
          "gatsby-remark-component",
          "gatsby-remark-external-links",
          `gatsby-remark-emoji`
        ]
      }
    },
    'gatsby-plugin-sharp',
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-46748250-1`,
      },
    },
    `gatsby-plugin-catch-links`,
   // `gatsby-plugin-feed`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-less`,
      options: {
        javascriptEnabled: true,
      },
    },
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
