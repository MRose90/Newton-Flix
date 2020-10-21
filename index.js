const http = require("http");
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'application/json'});
    var json = JSON.stringify({"demo":"demo"})
    response.end(json);
 }).listen(9003);
 
 console.log('Server running at http://127.0.0.1:9003/');