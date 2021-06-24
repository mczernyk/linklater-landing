module.exports = {
  siteMetadata: {
    title: `LinkLater`,
    description: `Save, organize and share links with friends.`,
    author: `LinkLater`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://app.us6.list-manage.com/subscribe/post?u=994e8eaff750b41913610923f&amp;id=c309fda37c',

      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `LinkLater`,
        short_name: `LinkLater`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#048BFF`,
        display: `minimal-ui`,
        icon: `src/images/Icon-Black.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
