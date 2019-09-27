import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    flex: 0 0 49%;
  }
  &::after {
    content: 'New';
    color: ${props => props.theme.colors.base};
    text-transform: capitalize;
    font-weight: bold;
    position: absolute;
    top: -0.75rem;
    right: -0.75rem;
    padding: 0.5rem;
    border-radius: 2px;
    background: ${props => props.theme.colors.highlight};
  }
`

const Container = styled(Link)`
  position: relative;
  background: white;
  border: 1px solid ${props => props.theme.colors.base};
  border-radius: 2px;
  transition: all 0.4s;
  display: flex;
  flex-flow: column;
  height: 100%;
  width: 100%;
  color: ${props => props.theme.colors.base};
  text-decoration: none;
  img {
    transition: transform 0.4s !important;
  }
  &:hover {
    box-shadow: 0 5px 15px rgba(34, 34, 34, 0.2);
    h2 {
      background: ${props => props.theme.colors.highlight};
      color: ${props => props.theme.colors.base};
    }
    img {
      transform: scale(1.1);
    }
  }
  @media (hover: none) {
    box-shadow: none !important;
    h2 {
      background: ${props => props.theme.colors.base} !important;
      color: white !important;
    }
    img {
      transform: scale(1) !important;
    }
  }
`

const Cover = styled(Img)`
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
`

const Title = styled.h2`
  transition: all 0.2s;
  margin-top: auto;
  width: 100%;
  align-self: flex-end;
  padding: 1rem;
  background: ${props => props.theme.colors.base};
  border-top: 1px solid ${props => props.theme.colors.base};
  color: white;
  font-size: 1.25em;
  line-height: 1.2;
  font-weight: bold;
  text-transform: capitalize;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    font-size: 1.5em;
  }
`

const Placeholder = styled.div`
  background: white;
  padding-bottom: 66.67%;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
`

const Featured = props => {
  return (
    <Wrapper>
      <Container to={`${props.slug}`}>
        {props.image && (
          <Cover
            sizes={{
              ...props.image.childImageSharp.fluid,
              aspectRatio: 1.5 / 1,
            }}
            backgroundColor="#ffffff"
          />
        )}
        {props.image === null ? <Placeholder /> : ''}
        <Title>{props.title}</Title>
      </Container>
    </Wrapper>
  )
}

export default Featured
