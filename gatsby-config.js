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
        path: `${__dirname}/static/images`,
      },
    },
    // {
    //   resolve: "gatsby-source-mongodb",
    //   options: {
    //     // Name of the database and collection where are books reside
    //     dbName: "gatsby",
    //     collection: "books",
    //     server: {
    //       address: "main-shard-00-01-zxsxp.mongodb.net",
    //       port: 27017,
    //     },
    //     auth: {
    //       user: "rajtajale",
    //       password: "rrr00711",
    //     },
    //     extraParams: {
    //       replicaSet: "Main-shard-0",
    //       ssl: true,
    //       authSource: "admin",
    //       retryWrites: true,
    //     },
    //   },
    // },
  ],
};
