# Subtle UI

A collection of clever yet understated user interactions found on the web. This project uses React to keep the example code simple and brief.

## How To Contribute

1. Create a new markdown file in the [`content`](https://github.com/ryanwiemer/subtle-ui/tree/master/content) folder. For example `my-cool-example.md`.
2. Add the following front matter attributes:

```
title: My Cool Example
date: 2019-09-24
author: John Doe
github: johndoe123
```

3. Add your example code and relevant content using [markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) syntax.
4. Submit a pull request with the new markdown file.
5. Once merged into `master` the website will automatically deploy to https://subtle-ui.netlify.com. 🎉

**Important Note:** This project uses a [custom component](https://github.com/ryanwiemer/subtle-ui/blob/master/src/components/CodeEditor.js) to render markdown code blocks as live code including a preview. There are a few unique characteristics to be aware of:

- Code blocks are configured with [React](https://reactjs.org/) and [Styled Components](https://www.styled-components.com/) already in the scope.
- Code blocks should be written as imperative code and you need to call `render` with your JSX elements at the bottom.
- You may use ES6 syntax if desired as code is transpiled via [Babel](https://babeljs.io/).
- At this time there is no way to import other external libraries. If you have any questions or need additional functionality please file an [issue](https://github.com/ryanwiemer/subtle-ui/issues).

## Development

`yarn develop` - See a local version of the website on http://localhost:8000

`yarn build && yarn serve` - See a production version of the website on http://localhost:9000
