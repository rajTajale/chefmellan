module.exports = {
  siteMetadata: {
    title: "chefmellan",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/static/images`,
      },
    },
    `gatsby-plugin-styled-components`,
  ],
};
