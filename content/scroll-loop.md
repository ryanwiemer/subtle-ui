---
title: Scroll Loop
date: 2018-09-03
author: Ryan Wiemer
github: ryanwiemer
---

> **Note**: This example uses [React](https://reactjs.org/) with ES6 syntax and [Styled Components](https://www.styled-components.com/).

```javascript
class Loop extends React.Component {

  handleScroll = (e) => {
    const bottom = e.target.scrollHeight
    - e.target.scrollTop === e.target.clientHeight
    const top = e.target.scrollTop === 0
    if (bottom) {
      e.target.scrollTop = 0
    }
    else if (top) {
      e.target.scrollTop = e.target.scrollHeight
    }
  }

  render() {
    /* Styling for demo purposes only.
      Overflow-y and a fixed height
      are the only necessary elements. */
    const Container = styled.section`
      height: 500px;
      overflow-y: scroll;
      padding: 1em 1em 0 1em;
      border: 1px solid gray;
      div {
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: 1.5em;
        background: lightblue;
        margin: 0 0 1em 0;
        height: 500px;
      }
    `

  return (
    <Container onScroll={this.handleScroll}>
      {this.props.children}  
    </Container>
    )
  }
}

render (
  <Loop>
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
    <div>7</div>
    <div>8</div>
    <div>9</div>
    <div>10</div>
    <div>11</div>
    <div>12</div>
    <div>13</div>
    <div>14</div>
    <div>15</div>
    <div>16</div>
  </Loop>
)
```
