module.exports = {
  siteMetadata: {
    title: `Arkixd`,
    description: `Works of the bachelor Interaction Design students at Malmö University`,
    siteUrl: `https://arkixd.se/`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    // {
    //   resolve: `gatsby-plugin-mdx`,
    //   options: {
    //     defaultLayouts: {
    //       projects: require.resolve("./src/templates/project-page.js"),
    //       default: require.resolve("./src/components/layout.js"),
    //     },
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/projects`,
        name: `projects`,
      },
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/content/projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-copy-files',
      options: {
        source: `${__dirname}/src/images`,
        destination: '/images'
      }
    },
    // {
    //   resolve: `gatsby-transformer-remark`,
    //   options: {
    //     plugins: [
    // {
    //   resolve: `gatsby-remark-images`,
    //   options: {
    //     maxWidth: 630,
    //   },
    // },
    // {
    //   resolve: `gatsby-remark-responsive-iframe`,
    //   options: {
    //     wrapperStyle: `margin-bottom: 1.0725rem`,
    //   },
    // },
    // `gatsby-remark-copy-linked-files`,
    // `gatsby-remark-smartypants`,
    // ],
    //},
    //},

    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Arkixd`,
        short_name: `Arkixd`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: require.resolve('./plugins/gatsby-remark-image-paths')
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
              showCaptions: false,
              markdownCaptions: false
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
          },
          `gatsby-remark-smartypants`,
        ],
        defaultLayouts: {
          default: require.resolve(`./src/components/Layout.js`),
        },
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
