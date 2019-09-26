---
title: Scroll Loop
date: 2018-09-03
author: Ryan Wiemer
github: ryanwiemer
---

> **Note**: This example uses [React](https://reactjs.org/) with ES6 syntax and [Styled Components](https://www.styled-components.com/).

```javascript
const Loop = props => {

  handleScroll = (e) => {
    const bottom = e.target.scrollHeight
    - e.target.scrollTop === e.target.clientHeight
    if (bottom) {
      e.target.scrollTop = 0
    }
  }

  /*
    Styling for demo purposes only.
    Overflow-y, height and
    -webkit-overflow-scrolling are
    the only necessary elements.
  */
  const Container = styled.section`
    height: 500px;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    padding: 1em 1em 0 1em;
    border: 1px solid gray;
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-size: 1.25em;
      line-height: 1.4;
      margin: 0 0 1em 0;
      height: 500px;
      background: lightblue;
    }
  `

  return (
    <Container onScroll={handleScroll}>
      {props.children}  
    </Container>
    )
  }

  render (
    <Loop>
      <div>&darr; Scroll down the loop &darr;</div>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </Loop>
  )
```

## Considerations
* This particular ui pattern works best on desktop.  
* Touch screen device scrolling can be tricky and inconsistent so it is common to see this ui pattern disabled on touch devices.

## Inspiration
* https://dow-smith.com/
