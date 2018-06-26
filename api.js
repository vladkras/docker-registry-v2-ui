const http = require('http')

exports.get = function(url) {
  http.get('http://172.17.0.3:5000/v2/' + url, result => {
      result.setEncoding('utf8');
      let rawData = '';
      result.on('data', (chunk) => { rawData += chunk; });
      result.on('end', () => {
          return rawData
      })
  }).on('error', (e) => {
    return `Got error: ${e.message}`;
  })
}
