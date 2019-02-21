const { createFilePath } = require('gatsby-source-filesystem')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
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
                  code {
                    scope
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }
        const posts = result.data.allMdx.edges
        posts.forEach(({ node }, index) => {
          const previous =
            index === posts.length - 1 ? null : posts[index + 1].node
          const next = index === 0 ? null : posts[index - 1].node
          createPage({
            path: node.fields.slug,
            component: path.resolve('./src/templates/post.js'),
            context: {
              slug: node.fields.slug,
              id: node.id,
              previous,
              next,
            },
          })
        })
      })
    )
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
