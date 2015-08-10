////////////DEPENDENCIES///////////////////
var express = require('express');
var bodyParser = require('body-parser');

var server = express();
var port = 8080;

server.listen(port, function (){
    console.log("I'm still watching you", port)
});


server.use(bodyParser.json());

var messages = [{message: 'Fuck you'}];

server.get('/', function(req, res) {
    res.send(JSON.stringify(messages));
});

server.post('/', function(req, res){
    var newMessage = req.body.message;
    messages.push(newMessage);
    res.end("it worked");
});



server.put('/api/person/:id,', function(req, res){
    var ourId = req.params.id;
});
