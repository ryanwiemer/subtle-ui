import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Wrapper = styled.div`
  margin: 0 0 2rem 0;
  a {
    transition: 0.2s;
    margin: 0 1rem 0 0;
    &:hover {
      opacity: 0.9;
    }
    @media (hover: none) {
      opacity: 1 !important;
    }
  }
`

const PostLinks = props => {
  return (
    <Wrapper>
      {props.previous && <Link to={props.previous.fields.slug}>Prev</Link>}
      {props.next && <Link to={props.next.fields.slug}>Next</Link>}
    </Wrapper>
  )
}

export default PostLinks
