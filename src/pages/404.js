import React from 'react'
import Layout from '../components/Layout'
import Container from '../components/Container'
import SEO from '../components/SEO'
import Title from '../components/Title'
import { Link } from 'gatsby'

const ErrorPage = () => {
  return (
    <>
      <SEO title="Page Not Found" description=" " />
      <Layout>
        <Container>
          <Title>404 - Page Not Found</Title>
          <Link to="/">Return Home</Link>
        </Container>
      </Layout>
    </>
  )
}

export default ErrorPage
