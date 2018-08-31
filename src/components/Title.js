import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.h2`
  font-size: 2em;
  font-weight: bold;
  text-transform: capitalize;
  margin: 1.5rem 0;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    font-size: 2.5em;
  }
`

const Title = props => {
  return <Wrapper>{props.children}</Wrapper>
}

export default Title
