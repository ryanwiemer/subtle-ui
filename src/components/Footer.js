import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.footer`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.maxWidth};
`

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;
  padding: 1.5em;
`

const Item = styled.li`
  display: inline-block;
  a {
    font-weight: 600;
    transition: all 0.2s;
    color: ${props => props.theme.colors.base};
    &:hover {
      opacity: 0.9;
    }
    @media (hover: none) {
      opacity: 1 !important;
    }
  }
`

const Button = styled.a`
  display: inline-block;
  text-decoration: none;
  font-weight: bold;
  padding: 1em;
  background: ${props => props.theme.colors.highlight};
  border-radius: 2px;
  transition: all 0.2s;
  svg {
    margin: 0 0 0 0.5rem;
    position: relative;
    top: 0.1rem;
  }
  &:hover {
    box-shadow: 0 5px 15px rgba(190, 150, 10, 0.25);
  }
  @media (hover: none) {
    box-shadow: none;
  }
`

export default () => {
  return (
    <>
      <Wrapper>
        <List>
          <Item>
            <a
              href="https://github.com/ryanwiemer"
              target="_blank"
              rel="noopener noreferrer"
            >
              @ryanwiemer
            </a>
          </Item>
          <Item>
            <Button
              href="https://github.com/ryanwiemer/subtle-ui#how-to-contribute"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contribute
              <svg
                aria-labelledby="simpleicons-github-icon"
                role="img"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title id="simpleicons-github-icon">GitHub icon</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </Button>
          </Item>
        </List>
      </Wrapper>
    </>
  )
}
