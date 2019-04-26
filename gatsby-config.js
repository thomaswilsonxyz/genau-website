const path = require("path")

module.exports = {
  siteMetadata: {
    title: `genau dance co`,
    description: `Genau Dance Company Website`,
    author: `@tjwilson92`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    // Load all images from file system
    // this is necessary to use any images, which are treated by sharpr
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `trilogy`,
        path: `${__dirname}/src/images/trilogy`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `headshots`,
        path: `${__dirname}/src/images/headshots`,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        name: `trilogy`,
        path: `${__dirname}/src/images/trilogy`,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        name: `headshots`,
        path: `${__dirname}/src/images/headshots`,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        name: `shows`,
        path: `${__dirname}/src/images/shows/**`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
