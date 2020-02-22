const path = require("path")

module.exports = {
  siteMetadata: {
    title: `genau dance co`,
    description: `genau dance co are a contemporary dance theatre company based in London, England.`,
    author: `thomas wilson <thomas@thomaswilson.xyz>`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    // Load all images from file system
    // this is necessary to use any images, which are treated by sharpr

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `showTexts`,
        path: `${__dirname}/src/data/showTexts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `home`,
        path: `${__dirname}/src/images/home`,
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "showImages",
        path: `${__dirname}/src/images/shows`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "blogPostHeaderImages",
        path: `${__dirname}/src/images/blog/header-images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "blogPosts",
        path: `${__dirname}/src/data/blog-posts`,
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
      resolve: "gatsby-plugin-sharp",
      options: {
        name: "blog",
        path: `${__dirname}/src/images/blog`,
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
        path: `${__dirname}/src/images/shows`,
      },
    },

    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 700,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `genau dance co`,
        short_name: `genau`,
        start_url: `/`,
        background_color: `#F5F5F5`,
        theme_color: `#424874`,
        display: `minimal-ui`,
        icon: `src/images/genau-logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
