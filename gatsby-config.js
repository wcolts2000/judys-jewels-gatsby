module.exports = {
  siteMetadata: {
    title: `Mike & Judy's Jewels`,
    description: `Looking for hand-crafted jewelry, beading, bracelets, necklaces, earrings and more? Mike and Judy's Jewels is you destination.`,
    author: `@seanphenegerdev`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `mike-and-judys-jewels`,
        short_name: `JJs`,
        start_url: `/`,
        background_color: `#6480E0`,
        theme_color: `#6480E0`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
