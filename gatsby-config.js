module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // the only required plugin option for WordPress is the GraphQL url.
        url: process.env.WPGRAPHQL_URL || `http://34.237.1.113/graphql`,
      },
    },
  ],
}
