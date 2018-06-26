'use strict';

const server = require('express')();
var expressVue = require("express-vue");

const expressVueMiddleware = expressVue.init();
server.use(expressVueMiddleware);

const http = require('http')
const api = require('./api')

server.get('/v2*', (req, res) => {
    http.get(process.env.REGISTRY_HOST + req.url, result => {
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

server.get('/', (req, res, next) => {
    const data = api.get('_catalog').then(data => {
      res.renderVue('App.vue', JSON.parse(data));
    }).catch(data => {
      // display error
    })
})

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
    console.log('Listening on port ' + PORT);
});
