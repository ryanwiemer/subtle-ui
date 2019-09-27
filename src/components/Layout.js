import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import Footer from '../components/Footer'

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div className="siteRoot">
        <ThemeProvider theme={theme}>
          <>
            <div className="siteContent">{children}</div>
            <Footer />
          </>
        </ThemeProvider>
        <GlobalStyle />
      </div>
    )
  }
}

export default Template
