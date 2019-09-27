import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'
import Layout from '../components/Layout'
import Container from '../components/Container'
import CodeEditor from '../components/CodeEditor'
import Title from '../components/Title'
import Author from '../components/Author'
import BackButton from '../components/BackButton'
import PostLinks from '../components/PostLinks'
import { Markdown } from '../components/Markdown'
import SEO from '../components/SEO'

const PostTemplate = ({ pageContext, location }) => {
  const post = pageContext.post
  const previous = pageContext.previous
  const next = pageContext.next

  let ogImage
  try {
    ogImage = post.frontmatter.image.childImageSharp.ogimg.src
  } catch (error) {
    ogImage = null
  }

  return (
    <>
      <SEO
        title={post.frontmatter.title}
        url={post.fields.slug}
        image={ogImage}
      />
      <Layout location={location}>
        <Container>
          <BackButton />
          <Title>{post.frontmatter.title}</Title>
          <PostLinks previous={previous} next={next} />
          <Author
            name={post.frontmatter.author}
            github={post.frontmatter.github}
          />
          <MDXProvider
            components={{
              ...Markdown,
              code: CodeEditor,
            }}
          >
            <MDXRenderer>{post.body}</MDXRenderer>
          </MDXProvider>
        </Container>
      </Layout>
    </>
  )
}
export default PostTemplate
