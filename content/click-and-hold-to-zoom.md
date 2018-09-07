---
title: Click & Hold To Zoom
date: 2018-08-31
author: Ryan Wiemer
github: ryanwiemer
---

> **Note**: This example uses [React](https://reactjs.org/) with ES6 syntax.

```javascript
class Zoom extends React.Component {

  constructor(props) {
   super(props)
   this.state = {zoom: .5}
  }

  startZoom = () => {
    this.setState({zoom: 1})
  }

  endZoom = () => {
    this.setState({zoom: .5})
  }

  render() {

  const zoomStyles = {
    cursor: 'zoom-in',
    WebkitUserSelect: 'none',
    WebkitTouchCallout: 'none',
    transition: '1s all',
    transform: `scale(${this.state.zoom})`
  }

  return (
    <div style={{padding:'1em'}}>
      <div
        style={zoomStyles}
        onTouchStart={this.startZoom}
        onTouchEnd={this.endZoom}
        onTouchCancel={this.endZoom}
        onMouseDown={this.startZoom}
        onMouseUp={this.endZoom}
        onMouseOut={this.endZoom}
        onPointerDown={this.startZoom}
        onPointerUp={this.endZoom}
        onPointerCancel={this.endZoom}
      >
        {this.props.children}  
      </div>
    </div>
    )
  }
}

render (
  <Zoom>
    <img src="https://placekitten.com/500/500" draggable="false"/>
  </Zoom>
)
```

## Considerations
* Provide users with written instructions or a visual indicator to teach them the functionality
