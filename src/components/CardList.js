import React from 'react'
import styled from 'styled-components'

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: 0 auto;
  &::after {
    content: '';
    flex: 0 0 32%;
  }
  li:first-child a::after {
    content: 'new';
    color: ${props => props.theme.colors.base};
    text-transform: capitalize;
    font-weight: bold;
    position: absolute;
    top: -0.75rem;
    right: -0.75rem;
    padding: 0.5rem;
    border-radius: 2px;
    background: ${props => props.theme.colors.highlight};
    border: 1px solid white;
  }
`

const CardList = props => {
  return <List>{props.children}</List>
}

export default CardList
