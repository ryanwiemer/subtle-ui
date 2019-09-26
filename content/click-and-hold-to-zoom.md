---
title: Click & Hold To Zoom
date: 2018-08-31
author: Ryan Wiemer
github: ryanwiemer
---

> **Note**: This example uses [React](https://reactjs.org/) with hooks and ES6 syntax.

```javascript
const Zoom = props =>  {

  const [zoom, setZoom] = useState(.5)

  start = () => {
    setZoom(1)
  }

  end = () => {
    setZoom(.5)
  }

  const zoomStyles = {
    cursor: 'zoom-in',
    WebkitUserSelect: 'none',
    WebkitTouchCallout: 'none',
    transition: '1s all',
    transform: `scale(${zoom})`
  }

  return (
    <div style={{padding:'1em'}}>
      <div
        style={zoomStyles}
        onTouchStart={start}
        onTouchEnd={end}
        onTouchCancel={end}
        onMouseDown={start}
        onMouseUp={end}
        onMouseOut={end}
        onPointerDown={start}
        onPointerUp={end}
        onPointerCancel={end}
      >
        {props.children}  
      </div>
    </div>
  )
}

render (
  <Zoom>
    <img
      src="https://placekitten.com/500/500"
      draggable="false"
    />
  </Zoom>
)
```

## Considerations
* Provide users with written instructions or a visual indicator to teach them the functionality
