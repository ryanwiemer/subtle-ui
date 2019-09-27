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
`

const Title = styled.h2`
  font-size: 1.75em;
  font-weight: bold;
  margin: 0 0 1rem 0;
`

const CardList = props => {
  return (
    <>
      <Title>More Examples</Title>
      <List>{props.children}</List>
    </>
  )
}

export default CardList
