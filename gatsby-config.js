module.exports = {
  siteMetadata: {
    title: 'Tom Vorel 2018',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`lato\:300,400,600,700`, `oswald\:600,700`],
      },
    },
  ],
}
