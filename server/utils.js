function sendResponse(response, statusCode, data) {
  response.writeHead(statusCode, data.contentType);
  response.end(data.body);
}

function parseRequest(request, successCallback, errorCallback) {
  try {
    var body = '';
    
    request.on('data', function(chunk) {
      body += chunk;
    });

    request.on('end', function() {
      try {
        body = JSON.parse(body);
        successCallback(body);
      } catch(error) {
        var message = 'Error parsing request: request body needs to be JSON\n';
        console.error(message)
        errorCallback({contentType: 'text/plain', body: message});      
      }
    });
  } catch (error) {
    var message = 'Error reading request: ' + error.message + '\n';
    console.error(message);
    errorCallback({contentType: 'text/plain', body: message});
  }
}

module.exports = {
    sendResponse: sendResponse
  , parseRequest: parseRequest
};
