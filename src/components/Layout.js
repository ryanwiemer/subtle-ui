import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import '../styles/global'
import theme from '../styles/theme'
import Footer from '../components/Footer'

const Container = styled.div`
  max-width: ${props => props.theme.sizes.maxWidth};
  width: 100%;
  padding: 1.5em 1.5em 0 1.5em;
  margin: 0 auto;
`

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div className="siteRoot">
        <ThemeProvider theme={theme}>
          <>
            <Container className="siteContent">{children}</Container>
            <Footer />
          </>
        </ThemeProvider>
      </div>
    )
  }
}

export default Template
