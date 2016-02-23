const http = require('http')
    , url = require('url')
    , utils = require('./utils')
    ;

function handleRequest(request, response) {
  var method = request.method
    , urlObj = url.parse(request.url, true)
    ;

  if(method === 'GET') {

  }

  if(method === 'POST') {

  }
}

module.exports.handleRequest = handleRequest;
