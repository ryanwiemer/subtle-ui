import React, { useState } from 'react'
import styled from 'styled-components'
import Confetti from 'react-confetti'
import Featured from './Featured'

const Wrapper = styled.div`
  background: ${props => props.theme.colors.secondary};
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    min-height: 85vh;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;
  }
`

const Container = styled.div`
  max-width: ${props => props.theme.sizes.maxWidth};
  width: 100%;
  padding: 3em 1.5em;
  margin: 0 auto 1rem;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    display: flex;
    justify-content: space-between;
  }
`

const Title = styled.h1`
  text-transform: uppercase;
  font-size: 2.5em;
  font-weight: bold;
  margin: 0 0 1rem 0;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    font-size: 3.25em;
  }
`

const Text = styled.div`
  margin: 0 0 2rem;
  p {
    line-height: 1.5;
  }
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    flex: 0 0 49%;
    margin: 0;
  }
`

const Button = styled.a`
  margin: 0 0 0.1rem 0;
  text-decoration: none;
  display: inline-block;
  background: white;
  border: 1px solid ${props => props.theme.colors.tertiary};
  border-radius: 3px;
  padding: 0.25rem 0.5rem;
  line-height: 1;
  transition: all 0.2s;
  position: relative;
  top: 0;
  cursor: pointer;
  user-select: none;
  &:active {
    top: 2px;
  }
  span {
    display: inline-block;
    transition: 0.3s ease-out;
  }
  &:hover {
    box-shadow: 0 5px 15px rgba(34, 34, 34, 0.1);
    span {
      transform: rotateZ(360deg);
    }
  }
  @media (hover: none) {
    box-shadow: none !important;
    top: 0 !important;
    span {
      transform: none !important;
    }
  }
`

const Intro = props => {
  const words = ['simple', 'typical', 'boring']
  const [party, setParty] = useState(false)
  const [count, setCount] = useState(0)

  const dropConfetti = () => {
    setParty(true)
    setTimeout(() => {
      setParty(false)
    }, 2000)
  }

  const changeText = () => {
    setCount(count + 1)
    if (count === words.length - 1) {
      setCount(0)
    }
  }

  return (
    <Wrapper>
      <Container>
        <Text>
          <Title>Subtle UI</Title>
          <p>
            A collection of clever yet understated user interactions found on
            the web. These examples live in the sweet spot between a{' '}
            <Button onClick={changeText}>{words[count]}</Button> interaction and
            something that feels too{' '}
            <Button onClick={dropConfetti}>
              <span>🎉</span>
              gimicky
            </Button>
            .
          </p>
          {typeof window !== `undefined` && (
            <Confetti
              width={window.innerWidth}
              height={window.innerHeight}
              colors={['#121212', '#fafafa', '#e8e8e8', '#f5ce46']}
              numberOfPieces={party ? '200' : '0'}
            />
          )}
        </Text>
        <Featured
          title={props.featured.frontmatter.title}
          image={props.featured.frontmatter.image}
          slug={props.featured.fields.slug}
        />
      </Container>
    </Wrapper>
  )
}

export default Intro
