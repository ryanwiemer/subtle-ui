import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: ${props => props.theme.sizes.maxWidth};
  width: 100%;
  padding: 1.5em 1.5em 0 1.5em;
  margin: 0 auto;
`

const Container = props => {
  return <Wrapper>{props.children}</Wrapper>
}

export default Container
