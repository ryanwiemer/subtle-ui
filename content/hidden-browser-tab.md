---
title: Hidden Browser Tab
date: 2018-09-06
author: Ryan Wiemer
github: ryanwiemer
---

> **Note**: This example uses [React](https://reactjs.org/) with ES6 syntax.

```javascript
class Hidden extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: document.title,
      hiddenTitle: 'Come Back...'
    }
  }

  componentDidMount() {
    document.addEventListener('visibilitychange', this.handleVisibilityChange)
  }

  componentWillUnmount() {
    document.removeEventListener('visibilitychange', this.handleVisibilityChange)
  }

  handleVisibilityChange = () => {
    if (document.hidden) {
      document.title = this.state.hiddenTitle
    }
    else {
      document.title = this.state.title
    }
  }

  render() {
    return (<div/>)
  }
}

/* The Instructions component is for demo purposes only */
const Instructions = () => {
  return (
    <div style={{
      'width':'100%',
      'height':'100%',
      'padding':'1em',
      'lineHeight': '1.4',
      'background':'moccasin',
      'textAlign':'center'
    }}>
      Click on a different browser tab to
      see the title tag change
    </div>
  )
}

render (
    <div>
      <Hidden/>
      <Instructions/>
    </div>
)
```

## Considerations
* This ui pattern is primarily focused on desktop browsers where other tabs can easily be seen.
