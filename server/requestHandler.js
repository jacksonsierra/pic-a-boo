const http = require('http')
    , url = require('url')
    , utils = require('./utils')
    , users = require('./db/users')
    ;

function handleRequest(request, response) {
  var method = request.method
    , urlObj = url.parse(request.url, true)
    ;

  if(method === 'GET') {
    if(urlObj.pathname === '/users') {
      if(urlObj.query.username === undefined) {
        users.getUsers(utils.sendResponse.bind(null, response));
        return;
      }

      users.findUser(utils.sendResponse.bind(null, response), urlObj.query);
      return;
    }
  }

  if(method === 'POST') {
    if(urlObj.pathname === '/signup') {
      utils.parseRequest(
          request 
        , users.insertUser.bind(null, utils.sendResponse.bind(null, response)) 
        , utils.sendResponse.bind(null, response, 400)
      );
      return;
    }

    if(urlObj.pathname === '/login') {
      utils.parseRequest(
          request
        , users.findUser.bind(null, utils.sendResponse.bind(null, response))
        , utils.sendResponse.bind(null, response, 400)
      );
      return;
    }

    utils.sendResponse(response, 404, {
        contentType: 'text/plain'
      , body: http.STATUS_CODES[404] + '\n'
    });
    return;
  }

  utils.sendResponse(response, 405, {
      contentType: 'text/plain'
    , body: http.STATUS_CODES[405] + '\n'
  });
}

module.exports.handleRequest = handleRequest;
