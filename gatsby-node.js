const { createFilePath } = require('gatsby-source-filesystem')
const path = require('path')

// Schema Customization
exports.sourceNodes = ({ actions, schema }) => {
  const { createTypes } = actions
  createTypes(`
    type Frontmatter @infer {
      title: String
      author: String
      github: String
      date: Date @dateformat
    }
    type Fields @infer {
      slug: String
    }
    type Mdx implements Node @infer {
      frontmatter: Frontmatter
      fields: Fields
    }
  `)
}

// Data query
const query = `
  {
    allMdx(
      sort: { fields: [frontmatter___date], order: ASC }
      limit: 1000
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          body
          frontmatter {
            title
            author
            github
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`

// Create Pages
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const result = await graphql(query)
  if (result.errors) {
    reporter.panic(result.errors)
  }
  const posts = result.data.allMdx.edges
  posts.forEach(({ node: post }, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node
    createPage({
      path: post.fields.slug,
      component: path.resolve('./src/templates/post.js'),
      context: {
        post,
        previous,
        next,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
