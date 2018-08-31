/* eslint-disable react/display-name */
import React from 'react'
import styled from 'styled-components'

export const H1 = styled.h1`
  font-size: 2em;
  font-weight: bold;
  margin: 0 0 1rem 0;
`

export const H2 = styled.h2`
  font-size: 1.75em;
  font-weight: bold;
  margin: 0 0 1rem 0;
`

export const H3 = styled.h3`
  font-size: 1.5em;
  font-weight: bold;
  margin: 0 0 1rem 0;
`

export const H4 = styled.h4`
  font-size: 1.25em;
  font-weight: bold;
  margin: 0 0 1rem 0;
`

export const H5 = styled.h5`
  font-size: 1em;
  font-weight: bold;
  margin: 0 0 1rem 0;
`

export const P = styled.p`
  line-height: 1.5;
  margin: 0 0 2rem 0;
`

export const A = styled.a`
  text-decoration: underline;
  transition: 0.2s all;
  &:hover {
    opacity: 0.9;
  }
  @media (hover: none) {
    opacity: 1 !important;
  }
`

export const InlineCode = styled.code`
  background: ${props => props.theme.colors.tertiary};
  padding: 0.25em;
  border-radius: 2px;
`

export const Code = styled.code`
  background: green;
`

export const Q = styled.blockquote`
  color: gray;
  border-left: 4px solid ${props => props.theme.colors.tertiary};
  padding: 0 0 0 0.75em;
`

export const Strong = styled.strong`
  font-weight: bold;
`

export const Ul = styled.ul`
  list-style: disc;
  margin: 0 0 2rem 0;
`

export const Ol = styled.ol`
  list-style: decimal;
  margin: 0 0 2rem 0;
`

export const Li = styled.li`
  list-style-position: inside;
  margin: 0 0 0.25rem 0;
`

export const Table = styled.table`
  margin: 0 0 2rem 0;
  td,
  th {
    padding: 0.25em 0.5em;
    border: 1px solid lightgray;
  }
  th {
    text-align: center;
    font-weight: bold;
  }
  tr:nth-child(2n) {
    background: ${props => props.theme.colors.secondary};
  }
`

export const Markdown = {
  h1: props => <H1 {...props} />,
  h2: props => <H2 {...props} />,
  h3: props => <H3 {...props} />,
  h4: props => <H4 {...props} />,
  h5: props => <H5 {...props} />,
  p: props => <P {...props} />,
  a: props => <A {...props} />,
  code: props => <Code {...props} />,
  inlineCode: props => <InlineCode {...props} />,
  blockquote: props => <Q {...props} />,
  strong: props => <Strong {...props} />,
  ul: props => <Ul {...props} />,
  ol: props => <Ol {...props} />,
  li: props => <Li {...props} />,
  table: props => <Table {...props} />,
  // TODO add `img`
}
