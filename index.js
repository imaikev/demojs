const express = require('express')
const app = express()
const path = require('path')
const http = require('http')

app.set('port', (process.env.PORT || 8080))
app.use(express.static(__dirname + '/angular-animations-site/dist/angular-animations-site'));

app.get('/*', function(request, response) {
  response.sendFile( path.join(__dirname))
})

const server = http.createServer(app);

server.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
