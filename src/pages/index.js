import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Card from '../components/Card'
import CardList from '../components/CardList'
import Intro from '../components/Intro'
import SEO from '../components/SEO'
import Container from '../components/Container'

const IndexPage = ({ data }) => {
  const examples = data.allMdx.edges

  console.log(examples[0])

  return (
    <>
      <SEO />
      <Layout>
        <Intro featured={examples[0].node} />
        <Container>
          <CardList>
            {examples.slice(1).map(({ node: example }) => (
              <Card
                key={example.id}
                title={example.frontmatter.title}
                slug={example.fields.slug}
                image={example.frontmatter.image}
              />
            ))}
          </CardList>
        </Container>
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
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
