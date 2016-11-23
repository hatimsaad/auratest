var express = require('express');
var app = express();
var port = process.env.PORT || 2600;//on peut choisir le port utilisé ici

// Serve static files
app.use(express.static(__dirname + '/public'));

// Serve your app
console.log('Served: http://localhost:' + port);
app.listen(port);
