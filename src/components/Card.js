import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const Wrapper = styled.li`
  position: relative;
  margin: 0 0 1em 0;
  width: 100%;
  text-align: center;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    flex: 0 0 49%;
    margin: 0 0 2vw 0;
  }
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    flex: 0 0 32%;
  }
  a {
    position: relative;
    background: white;
    border: 1px solid ${props => props.theme.colors.base};
    border-radius: 2px;
    transition: all 0.2s;
    display: flex;
    flex-flow: column;
    height: 100%;
    width: 100%;
    color: ${props => props.theme.colors.base};
    text-decoration: none;
    &:hover {
      background: ${props => props.theme.colors.highlight};
      box-shadow: 0 5px 15px rgba(34, 34, 34, 0.2);
    }
    @media (hover: none) {
      background: none!;
      box-shadow: none !important;
    }
  }
`

const Cover = styled(Img)`
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
`

const Title = styled.h2`
  border-top: 1px solid ${props => props.theme.colors.base};
  margin-top: auto;
  width: 100%;
  align-self: flex-end;
  padding: 1rem;
  background: ${props => props.theme.colors.tertiary};
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

const Card = props => {
  return (
    <Wrapper>
      <Link to={`${props.slug}`}>
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
      </Link>
    </Wrapper>
  )
}

export default Card
