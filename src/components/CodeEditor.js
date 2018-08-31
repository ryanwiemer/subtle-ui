import React from 'react'
import styled from 'styled-components'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { transform } from 'babel-standalone'

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

const LiveWrapper = styled.div`
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

const Container = styled.div`
  margin: 0 0 2rem 0;

  /* Error Styling */
  .react-live-error {
    background: #f68987;
    padding: 1rem;
    width: 100%;
    overflow: scroll;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
  }

  /* Preview Styling */
  .react-live-preview {
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
  }

  /* Prism Code Editor Styling */
  .prism-code {
    font-family: monospace;
    background: ${props => props.theme.colors.tertiary};
    overflow: scroll;
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
    &:focus {
      outline: none;
    }
    @media screen and (min-width: ${props => props.theme.responsive.small}) {
      flex: 0 0 50%;
    }
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    opacity: 0.3;
  }

  .token.punctuation {
    opacity: 0.7;
  }

  .namespace {
    opacity: 0.7;
  }

  .token.property,
  .token.tag,
  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol {
    color: #905;
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: #690;
  }

  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string,
  .token.variable {
    color: #9a6e3a;
  }

  .token.atrule,
  .token.attr-value,
  .token.keyword {
    color: #07a;
  }

  .token.regex,
  .token.important {
    color: #e90;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }

  .token.deleted {
    color: red;
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
  <Container>
    <LiveProvider
      noInline
      code={children}
      scope={scope}
      mountStylesheet={false}
      transformCode={transformCode}
    >
      <LiveWrapper>
        <LiveEditor />
        <LivePreview />
        <Label>Demo</Label>
      </LiveWrapper>
      <LiveError />
    </LiveProvider>
  </Container>
)

export default CodeEditor
