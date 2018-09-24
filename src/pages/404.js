import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Title from '../components/Title'
import { Link } from 'gatsby'

export default () => {
  return (
    <>
      <SEO />
      <Layout>
        <Title>404 - Page Not Found</Title>
        <Link to="/">Return Home</Link>
      </Layout>
    </>
  )
}
