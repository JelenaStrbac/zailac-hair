require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `zailac-hair`,
    description: `Zailac hair frizerski salon website.`,
    author: `@JelenaStrbac`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-fontawesome-css`,
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
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `example23340803.wordpress.com`,
        protocol: `https`,
        useACF: false,
        restApiRoutePrefix: "wp-json",
        hostingWPCOM: true,
        auth: {
          wpcom_app_clientSecret: process.env.GATSBY_WORDPRESS_CLIENT_SECRET,
          wpcom_app_clientId: process.env.GATSBY_CLIENT_ID,
          wpcom_user: process.env.GATSBY_USER,
          wpcom_pass: process.env.GATSBY_WORDPRESS_PASSWORD,
        },
        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/pages",
          "**/media",
          "**/tags",
          "**/taxonomies",
          "**/users",
        ],
        excludedRoutes: [
          "/wp/v2/users/**",
          "/wp/v2/settings*",
          "/wp/v2/themes*",
        ],
      },
    },
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Raleway`,
          `Roboto`,
          `Lato`,
          `Crimson Pro`,
          `Kaushan Script`,
          `source sans pro\:100,200,300,400,500,700`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-responsive-iframe`],
      },
    },
    "gatsby-plugin-instagram-embed",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-instagram-embed",
            options: {
              width: 320,
              height: 320,
            },
          },
          `gatsby-remark-responsive-iframe`, // optional plugin but recommended
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
