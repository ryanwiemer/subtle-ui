import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Example = styled.li`
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
    border: 2px solid ${props => props.theme.colors.tertiary};
    border-radius: 2px;
    transition: all 0.2s;
    display: flex;
    flex-flow: column;
    padding: 3em;
    height: 100%;
    width: 100%;
    color: ${props => props.theme.colors.base};
    text-decoration: none;
    .gatsby-image-wrapper {
      height: 0;
      padding-bottom: 60%;
    }
    &:hover {
      background: ${props => props.theme.colors.base};
      border-color: ${props => props.theme.colors.base};
      color: white;
      box-shadow: 0 10px 30px rgba(34, 34, 34, 0.25);
    }
    @media (hover: none) {
      background: white;
      color: ${props => props.theme.colors.base};
      border-color: ${props => props.theme.colors.tertiary};
      box-shadow: none;
    }
  }
`

const Title = styled.h2`
  font-size: 1.5em;
  line-height: 1.2;
  font-weight: bold;
  text-transform: capitalize;
`

const Card = props => {
  return (
    <Example>
      <Link to={`/${props.slug}/`}>
        <Title>{props.title}</Title>
      </Link>
    </Example>
  )
}

export default Card
