import React from 'react'
import Helmet from 'react-helmet'
import favicon from '../../static/favicon.ico'

const defaultTitle = "Subtle UI"
const defaultDescription = "A collection of clever yet understated user interactions found on the web"
const defaultURL ="https://subtle-ui.netlify.com"
const defaultImage ="https://subtle-ui.netlify.com/static/image.png"

const SEO = props => {
  return (
    <Helmet>
      <link rel="icon" href={favicon} />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:400,600"
        rel="stylesheet"
      />
      <title>{props.title ? `${props.title} - ${defaultTitle}` : defaultTitle}</title>
      <meta name="image" content={defaultImage} />
      <meta name="description" content={defaultDescription} />
      <meta property="og:url" content={props.url ? defaultURL + props.url : defaultURL} />
      <meta property="og:title" content={props.title ? `${props.title} - ${defaultTitle}` : defaultTitle} />
      <meta property="og:image" content={defaultImage} />
      <meta property="og:image:width" content="600" />
      <meta property="og:image:height" content="600" />
      <meta property="og:description" content={defaultDescription} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
       name="twitter:creator"
       content="@ryanwiemer"
      />
      <meta name="twitter:title" content={props.title ? `${props.title} - ${defaultTitle}` : defaultTitle} />
      <meta name="twitter:image" content={defaultImage} />
      <meta name="twitter:description" content={defaultDescription} />
    </Helmet>
  )
}

export default SEO
