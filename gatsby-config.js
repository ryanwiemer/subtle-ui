
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-mdx',
      options: {
        extensions: ['.mdx', '.md']
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/`,
        name: 'examples',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-remark',
    {
    resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#f5ce46',
        showSpinner: false,
        },
      },
    'gatsby-plugin-netlify'
  ],
}
