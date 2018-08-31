import React from 'react'
import Helmet from 'react-helmet'
import favicon from '../images/favicon.ico'
import image from '../images/image.png'

const title = "Subtle UI";
const description = "A collection of clever yet understated user interactions found on the web";

const SEO = props => {
  return (
    <Helmet>
      <link rel="icon" href={favicon} />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:400,600"
        rel="stylesheet"
      />
      <meta name="image" content={image} />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:url" content="https://subtle-ui.netlify.com" />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="600" />
      <meta property="og:image:height" content="600" />
      <meta property="og:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
       name="twitter:creator"
       content="@ryanwiemer"
      />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  )
}

export default SEO
