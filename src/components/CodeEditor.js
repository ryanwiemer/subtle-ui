import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { transform } from 'babel-standalone'
import theme from 'prism-react-renderer/themes/oceanicNext'

const Wrapper = styled.div`
  margin: 0 auto 2rem;
`

const Container = styled.div`
  position: relative;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    display: flex;
    flex-flow: row wrap;
  }
  h3 {
    font-weight: default;
  }
`

const Preview = styled(LivePreview)`
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border: 2px solid ${props => props.theme.colors.base};
  background: white;
  position: relative;
  padding: 1rem;
  display: block;
  height: auto;
  flex-basis: 50%;
  white-space: normal;
  overflow: hidden;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    flex: 0 0 50%;
    min-height: 10rem;
    border-top-right-radius: 2px;
    border-bottom-left-radius: 0;
  }
`

const Editor = styled(LiveEditor)`
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  font-size: 1.05em;
  line-height: 1.2em;
  textarea:focus {
    outline: none;
  }
  ::-webkit-scrollbar {
    display: none;
  }
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    flex: 0 0 50%;
    border-top-right-radius: 0;
    border-bottom-left-radius: 2px;
  }
`

const Error = styled(LiveError)`
  background: #f68987;
  padding: 1rem;
  width: 100%;
  overflow: scroll;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
`

const Label = styled.span`
  color: white;
  border-bottom-right-radius: 2px;
  display: none;
  position: absolute;
  font-size: 0.95em;
  bottom: 0;
  right: 0;
  padding: 0.5em 0.5em 0.5em 1.25em;
  border-top-left-radius: 2px;
  background: ${props => props.theme.colors.base};
  &::before {
    content: '';
    position: absolute;
    left: 0.35em;
    top: 0.7em;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${props => props.theme.colors.highlight};
    animation: blinker 2s linear infinite;
  }
  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    display: inline-block;
  }
`

const scope = { styled, useState, useEffect }

const transformCode = code => {
  try {
    code = transform(code, {
      presets: ['react', 'stage-0'],
    }).code
    return code
  } catch (e) {
    console.log(e)
    return code
  }
}

const CodeEditor = ({ children, ...props }) => (
  <Wrapper>
    <LiveProvider
      noInline
      code={children}
      scope={scope}
      transformCode={transformCode}
      theme={theme}
    >
      <Container>
        <Editor />
        <Preview />
        <Label>Demo</Label>
      </Container>
      <Error />
    </LiveProvider>
  </Wrapper>
)

export default CodeEditor
