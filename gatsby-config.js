module.exports = {
  siteMetadata: {
    title: `LinkLater🔗`,
    description: `LinkLater🔗 helps you save, organize and share links with friends.`,
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
        name: `LinkLater🔗`,
        short_name: `LinkLater🔗`,
        start_url: `/`,
        background_color: `#048BFF`,
        theme_color: `#048BFF`,
        display: `minimal-ui`,
        icon: `src/images/Icon-Thumb-Square.png`,
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
  ],
}
