const http = require('http')

exports.get = function(url) {
  return new Promise(function(resolve, reject) {
    http.get('http://172.17.0.3:5000/v2/' + url, result => {
        result.setEncoding('utf8');
        let rawData = '';
        result.on('data', (chunk) => { rawData += chunk; });
        result.on('end', () => {
            resolve(rawData)
        })
    }).on('error', (e) => {
      // TODO: resove for error
      reject(e.message);
    })
  })
}
