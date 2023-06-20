  let basePath = "/",
      contentPath = "content/",
      showThemeLogo = true,
      theme = "dark-green";

module.exports = {
  siteMetadata: {
    description: "Personal page of Nathan Hahn",
    locale: "en",
    showThemeLogo,
    title: "Nathan Hahn",
    formspreeEndpoint: "https://formspree.io/f/xjvdqdrj",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require("tailwindcss")(require("./tailwind.config")(theme)),
          require("postcss-input-range"),
          require("autoprefixer"),
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: contentPath,
      },
    },
    `gatsby-plugin-react-svg`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
