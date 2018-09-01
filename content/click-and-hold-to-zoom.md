---
title: Click & Hold To Zoom
date: 2018-08-31
author: Ryan Wiemer
github: ryanwiemer
---

> **Note**: This example uses [React](https://reactjs.org/) with ES6 syntax.

```javascript
class Zoom extends React.Component {

  constructor() {
   super()
   this.state = {zoom: .5}
  }

  handleButtonPress = () => {
    this.setState({zoom: 1})
  }

  handleButtonRelease = () => {
    this.setState({zoom: .5})
  }

  render() {

    const zoomStyles = {
      cursor: 'zoom-in',
      transition: '1s all',
      transform: `scale(${this.state.zoom})`
    }

    return (
      <div style={{padding:'1em'}}>
        <div
          style={zoomStyles}
          onTouchStart={this.handleButtonPress}
          onTouchEnd={this.handleButtonRelease}
          onMouseDown={this.handleButtonPress}
          onMouseUp={this.handleButtonRelease}
        >
          {this.props.children}  
        </div>
      </div>
    )
  }
}

render (
  <Zoom>
    <img src="https://placekitten.com/500/500" />
  </Zoom>
)
```
