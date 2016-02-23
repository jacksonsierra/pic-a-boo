const http = require('http')
    ;

http.createServer(requestHandler.handleRequest).listen(5000);

console.log('Listening on localhost:5000');
