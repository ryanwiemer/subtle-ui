import { injectGlobal } from 'styled-components'

injectGlobal`
  /* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote::before, blockquote::after,
  q::before, q::after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
  }

  /* Site Specific Globals */
  body {
    background: white;
    background-size: 40px 40px;
    background-image: linear-gradient(to right, #fafafa 1px, transparent 1px), linear-gradient(to bottom, #fafafa 1px, transparent 1px);
    line-height: 1;
    font-size: 100%;
    font-variant-ligatures: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    text-shadow: rgba(0, 0, 0, .01) 0 0 1px;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    color: #121212;
  }

  button {
    text-decoration: none;
    margin: 0;
    font-size: 1em;
    cursor: pointer;
    border: none;
    appearance: none;
  }

  button:focus {
    outline: none;
  }

  img {
    display: block;
  	width: 100%;
  	height: auto;
  }

  a {
    text-decoration: underline;
    color: #121212;
  }

  .nprogress-busy {
    cursor: wait;
  }

  #nprogress .peg {
    display: none !important;
  }

  #nprogress .bar {
    height: 4px !important;
  }

/* Fix Footer to bottom of viewport */
  html, body {
    height: 100%;
  }
  .siteRoot {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .siteContent {
    flex: 1 0 auto;
  }
  footer {
    width: 100%;
  }
`
