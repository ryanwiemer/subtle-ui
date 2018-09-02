import React from 'react'
import { graphql } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import { MDXProvider } from '@mdx-js/tag'
import Layout from '../components/Layout'
import CodeEditor from '../components/CodeEditor'
import Title from '../components/Title'
import Author from '../components/Author'
import BackButton from '../components/BackButton'
import PostLinks from '../components/PostLinks'
import { Markdown } from '../components/Markdown'
import SEO from '../components/SEO'

class PostTemplate extends React.Component {
  render() {
    const { data } = this.props
    const { previous, next } = this.props.pageContext

    return (
      <>
        <SEO
          title={data.mdx.frontmatter.title}
          url={data.mdx.fields.slug}
        />
        <MDXProvider
          components={{
            ...Markdown,
            code: CodeEditor,
          }}
        >
          <Layout location={this.props.location}>
            <BackButton />
            <Title>{data.mdx.frontmatter.title}</Title>
            <PostLinks previous={previous} next={next} />
            <Author
              name={data.mdx.frontmatter.author}
              github={data.mdx.frontmatter.github}
            />
            <MDXRenderer>{data.mdx.code.body}</MDXRenderer>
          </Layout>
        </MDXProvider>
      </>
    )
  }
}

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      fields {
        slug
      }
      code {
        body
        scope
      }
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
