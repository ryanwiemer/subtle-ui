import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Button = styled(Link)`
  background: ${props => props.theme.colors.base};
  color: white;
  display: inline-block;
  font-size: 1em;
  padding: 0.5em;
  font-weight: bold;
  text-transform: capitalize;
  border-radius: 3px;
  text-decoration: none;
  transition: all 0.2s;
  &:hover {
    box-shadow: 0 5px 15px rgba(34, 34, 34, 0.25);
  }
  @media (hover: none) {
    box-shadow: none;
  }
`

const BackButton = () => {
  return (
    <Button to="/">
      <span>&larr;</span> All Examples
    </Button>
  )
}

export default BackButton
