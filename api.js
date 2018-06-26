const http = require('http')

exports.get = function(url) {
  return new Promise(function(resolve, reject) {
    http.get(process.env.REGISTRY_HOST + '/v2/' + url, result => {
        result.setEncoding('utf8');
        let rawData = '';
        result.on('data', (chunk) => { rawData += chunk; });
        result.on('end', () => {
            resolve(rawData)
        })
    }).on('error', (e) => {
      // TODO: resove for error
      resolve({error: e.message});
    })
  })
}
