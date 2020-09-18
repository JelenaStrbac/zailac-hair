require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const autoprefixer = require(`autoprefixer`)
const browserslist = require("browserslist")

const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = "https://www.zailachair.com",
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env
const isNetlifyProduction = NETLIFY_ENV === "production"
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL

module.exports = {
  siteMetadata: {
    title: `Zailac Hair`,
    description: `Dobrodošli u Zailac hair - frizerski salon u Beogradu koji se bavi koloringom i nadogradnjom kose.`,
    author: `@MladenZailac`,
    keywords: [
      `frizer`,
      `salon`,
      `zailac`,
      `hair`,
      `kosa`,
      `balayage`,
      `olaplex`,
      `coloring`,
      `nadogradnja`,
      `beograd`,
    ],
    image: `/Logo.jpg`,
    siteUrl: siteUrl,
    socialLinks: {
      instagram: `https://www.instagram.com/zailachair/?hl=en`,
      facebook: `https://www.facebook.com/pages/category/Hair-Salon/Zailac-Hair-823673054501131/`,
    },
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
        background_color: `#f2efeb`,
        theme_color: `#dcc29c`,
        display: `minimal-ui`,
        icon: `src/images/Logo.jpg`, // This path is relative to the root of the site.
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
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`postcss-preset-env`)({ stage: 0 }),
          autoprefixer(),
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `roboto\:300,400,700`,
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
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-advanced-sitemap`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: "*" }],
          },
          "branch-deploy": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
          "deploy-preview": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-178266974-1",
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
