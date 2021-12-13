const express = require('express');
const chemin = require('chemin');
const app = express();
app.use(express.static(__dirname + '/dist/tp-blog'));
app.get('/*', function(req,res) {
res.sendFile(chemin.join(__dirname+
'/dist/tp-blog/index.html'));});
app.listen(process.env.PORT || 8080);
