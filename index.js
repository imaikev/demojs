var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 8080))
app.use(express.static(__dirname + '/dist/angular-animations-site'))

app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname))
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
