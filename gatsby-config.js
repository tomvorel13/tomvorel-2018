module.exports = {
  siteMetadata: {
    title: 'Tom Vorel 2018',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`raleway\:300,400,700`],
      },
    },
  ],
}
