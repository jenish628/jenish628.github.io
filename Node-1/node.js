var http = require ('http');
var dt = require ("./myModule");

http.createServer(function(req,res){
    res.writeHead(200, {
        'Content-type': 'text/html'
    });

    res.write("The date and the time currently is: " + dt.myDate());
    res.end;
}). listen(8080);