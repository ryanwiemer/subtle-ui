import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import { MDXProvider } from '@mdx-js/tag'
import Layout from '../components/Layout'
import CodeEditor from '../components/CodeEditor'
import Title from '../components/Title'
import Author from '../components/Author'
import BackButton from '../components/BackButton'
import PostLinks from '../components/PostLinks'
import { Markdown } from '../components/Markdown'

class PostTemplate extends React.Component {
  render() {
    const { data } = this.props
    const { previous, next } = this.props.pageContext

    return (
      <>
        <Helmet>
          <title>{data.mdx.frontmatter.title}</title>
          <meta property="og:title" content={data.mdx.frontmatter.title} />
          <meta name="twitter:title" content={data.mdx.frontmatter.title} />
        </Helmet>
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
