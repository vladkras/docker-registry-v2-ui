import { createApp } from './app'

const Vue = require('vue')
const server = require('express')()
const renderer = require('vue-server-renderer').createRenderer()
const http = require('http')

server.get('/v2', (req, res) => {
    http.get('http://localhost:5000'+req.url, result => {
        result.setEncoding('utf8');
        let rawData = '';
        result.on('data', (chunk) => { rawData += chunk; });
        result.on('end', () => {
            res.end(rawData)
        })
    }).on('error', (e) => {
      res.end(`Got error: ${e.message}`);
    })
})

server.get('*', (req, res) => {

  const app = new Vue({
    el: '#app',
    render: h => h(App)
  })

  renderer.renderToString(app, (err, html) => {
    if (err) {
      res.status(500).end('Internal Server Error')
      return
    }
    res.end(`
      <!DOCTYPE html>
      <html lang="en">
        <head><title>Hello</title></head>
        <body>${html}</body>
      </html>
    `)
  })

})


const PORT = process.env.PORT || 80;
server.listen(PORT, function () {
  console.log('Listening on port ' + PORT);
});
