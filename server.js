'use strict';

const server = require('express')();
var expressVue = require("express-vue");

const expressVueMiddleware = expressVue.init();
server.use(expressVueMiddleware);

const http = require('http')

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

server.get('*', (req, res, next) => {

    let name = req.params["0"] != "/" ? req.params["0"].substr(1) : '';

    res.renderVue('App.vue', {repo: name})
})

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
    console.log('PORT: ' + PORT);
    console.log('REGISTRY_HOST: ' + process.env.REGISTRY_HOST);
});
