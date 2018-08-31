import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import Card from '../components/Card'
import CardList from '../components/CardList'
import Intro from '../components/Intro'

export default ({ data }) => {
  const examples = data.allMdx.edges

  return (
    <>
      <Helmet>
        <title>Subtle UI</title>
      </Helmet>
      <Layout>
        <Intro />
        <CardList>
          {examples.map(({ node: example }) => (
            <Card
              key={example.id}
              title={example.frontmatter.title}
              slug={example.fields.slug}
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
          }
        }
      }
    }
  }
`
