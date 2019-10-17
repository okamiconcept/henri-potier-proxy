var proxy = require('express-http-proxy');
var app = require('express')();

app.set('port', process.env.PORT || 5000);

app.use('/', proxy('http://henri-potier.xebia.fr'));

app.listen(app.get('port'), function() {
  console.log('Node app is running at localhost:' + app.get('port'));
});
