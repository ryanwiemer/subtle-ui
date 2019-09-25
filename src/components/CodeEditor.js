import React from 'react'
import styled from 'styled-components'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { transform } from 'babel-standalone'
import prism from '../styles/prism'

const Wrapper = styled.div`
  margin: 0 auto 2rem;
`

const Container = styled.div`
  position: relative;
  border: 4px solid ${props => props.theme.colors.tertiary};
  border-radius: 2px;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    display: flex;
    flex-flow: row wrap;
  }
  h3 {
    font-weight: default;
  }
`

const Preview = styled(LivePreview)`
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
  }
`

const Editor = styled(LiveEditor)`
  font-family: monospace;
  background: ${props => props.theme.colors.base};
  direction: ltr;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  font-size: 1.05em;
  padding: 0.5rem;
  line-height: 1.2em;
  tab-size: 4;
  hyphens: none;
  overflow: scroll !important;
  textarea:focus {
    outline: none;
  }
  ::-webkit-scrollbar {
    display: none;
  }
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    flex: 0 0 50%;
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
  display: none;
  position: absolute;
  font-size: 0.95em;
  bottom: -4px;
  right: 0;
  padding: 0.5em 0.5em 0.5em 1.25em;
  border-top-left-radius: 2px;
  background: ${props => props.theme.colors.tertiary};
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

const scope = { styled }

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
      theme={prism}
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
