---
title: Browser Tab Notifications
date: 2018-09-07
author: Ryan Wiemer
github: ryanwiemer
image: images/browser-tab-notifications.png
---

> **Note**: This example uses [React](https://reactjs.org/) with ES6 syntax.

```javascript
class Notifications extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // Use a static title or grab document.title
      title: 'Browser Tab Notifications - Subtle UI',
      favicon: null,
      notificationFavicon: null,
      notificationCount: 0
    }
  }

  componentDidMount() {
    this.createFavicon()   
  }

  createFavicon = () => {
    // Save original favicon
    const favicon = document.getElementById('favicon')
    this.setState({favicon: favicon.href})

    // Create new favicon using the existing favicon but add red dot
    const img = document.createElement('img')
    img.src = favicon.href
    img.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = img.width
      canvas.height = img.height
      const context = canvas.getContext('2d')
      context.drawImage(img, 0, 0, img.width, img.height)
      context.beginPath()
      context.arc(img.width - img.width / 5 , img.height / 5,
      img.width / 5, 0, 2 * Math.PI)
      context.fillStyle = '#f00000'
      context.fill()      
      this.setState({notificationFavicon: canvas.toDataURL('image/png')})
    }
  }

  addNotification = () => {
    this.setState({
        notificationCount: this.state.notificationCount + 1
    }, () => {
      document.title = `(${this.state.notificationCount}) ${this.state.title}`
      document.getElementById('favicon').href = this.state.notificationFavicon
    })
  }


  clearNotification = () => {
    this.setState({
        notificationCount: 0
    }, () => {
      document.title = this.state.title
      document.getElementById('favicon').href = this.state.favicon
    })
  }

  render() {
    return (
      <div>
        <button
          style={{
            'marginRight':'1em',
            'marginBottom':'1em'
          }}
        onClick={this.addNotification}>
          Add New Notification
        </button>
        <button onClick={this.clearNotification}>
          Clear Notifications
        </button>
      </div>)
  }
}

/* The Instructions component is for demo purposes only */
const Instructions = () => {
  return (
    <div style={{
      'width':'100%',
      'height':'100%',
      'padding':'1em',
      'marginBottom': '1em',
      'lineHeight': '1.4',
      'background':'moccasin',
      'textAlign':'center'
    }}>
      Use the buttons below to change the title
      tag and favicon
    </div>
  )
}

render (
    <div>
      <Instructions/>
      <Notifications/>
    </div>
)
```

## Considerations
* This ui pattern is primarily focused on desktop browsers where other tabs can be seen.
* The favicon requires an `id` of "favicon".
