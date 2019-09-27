import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Card from '../components/Card'
import CardList from '../components/CardList'
import Intro from '../components/Intro'
import SEO from '../components/SEO'

const IndexPage = ({ data }) => {
  const examples = data.allMdx.edges

  return (
    <>
      <SEO />
      <Layout>
        <Intro />
        <CardList>
          {examples.map(({ node: example }) => (
            <Card
              key={example.id}
              title={example.frontmatter.title}
              slug={example.fields.slug}
              image={example.frontmatter.image}
            />
          ))}
        </CardList>
      </Layout>
    </>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            image {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
                ogimg: resize(width: 1000) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
