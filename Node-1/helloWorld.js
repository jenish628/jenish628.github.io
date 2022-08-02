var http = require ('http');

const { listenerCount } = require('process');

// Creating the Server
http.createServer(function (req, res){
    
    res.writeHead(200, {
        'Content-Type' : 'text/html' 
    });
    res.end('Hello WOrld!');
}) .listen(8080);


