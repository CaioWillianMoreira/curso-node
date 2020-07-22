var http = require('http')

http.createServer((req, res) => {
  res.end('ola!')
}).listen(3000)

console.log('Running in 300 port')
