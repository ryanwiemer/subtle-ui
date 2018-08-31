import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  margin: 0 0 2rem 0;
  display: inline-block;
  display: inline-flex;
  align-items: center;
  a {
    position: absolute !important;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
  }
  h2 {
    font-weight: bold;
  }
  img {
    width: 32px;
    height: 32px;
    border-radius: 2px;
    margin: 0 0.5rem 0 0;
  }
`

const Author = props => {
  return (
    <Wrapper>
      {props.github && <img src={`https://github.com/${props.github}.png`} />}
      {props.name && <h2>By {props.name}</h2>}
      {props.github && (
        <a
          href={`https://github.com/${props.github}`}
          target="_blank"
          rel="noopener noreferrer"
        />
      )}
    </Wrapper>
  )
}

export default Author
