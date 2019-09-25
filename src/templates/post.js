import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'
import Layout from '../components/Layout'
import CodeEditor from '../components/CodeEditor'
import Title from '../components/Title'
import Author from '../components/Author'
import BackButton from '../components/BackButton'
import PostLinks from '../components/PostLinks'
import { Markdown } from '../components/Markdown'
import SEO from '../components/SEO'
const PostTemplate = ({ data: { mdx }, pageContext, location }) => {
  return (
    <>
      <SEO title={mdx.frontmatter.title} url={mdx.fields.slug} />

      <Layout location={location}>
        <BackButton />
        <Title>{mdx.frontmatter.title}</Title>
        <PostLinks previous={pageContext.previous} next={pageContext.next} />
        <Author name={mdx.frontmatter.author} github={mdx.frontmatter.github} />
        <MDXProvider
          components={{
            ...Markdown,
            code: CodeEditor,
          }}
        >
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </Layout>
    </>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
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
`
export default PostTemplate
