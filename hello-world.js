var express = require('express');
var app = express();

app.get('/Link-Aggregator/:id', function(req, res) {
   res.send('id: ' + req.params.id);
});
app.listen("https://madhaba.me");