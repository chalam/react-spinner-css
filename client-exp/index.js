const React = require('react')
const express = require('express')
const ReactDOM = require('react-dom/server')
const { Ring } = require('react-spinner-css')

const app = express()
const port = 3000

app.get('*', (req, res) => {
  const el = React.createElement(Ring)
  const html = ReactDOM.renderToString(el)
  console.log(html)

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>react-spinner-css</title>
    </head>
    <body>
        ${html}
    </body>
    </html>
  `)
})

app.listen(port, () => console.log(`http://localhost:${port}`))
