const db = require('./db')
    , auth = require('./auth')
    ;

function findUser(callback, user) {
  var username = user.username
    , password = user.password
    ;

  db.users.findOne({ username: username }, function(error, result) {
    if(error) {
      console.error('Error querying Users database: ', error.message);
      callback(500, {contentType: 'text/plain', body: 'Error finding user\n'});
      return;
    }

    if(result) {
      if(password === undefined) {
        callback(200, {contentType: 'application/json', body: JSON.stringify(true) + '\n'});
        return;
      }

      var hash = result.hash;
      auth.validateHash(
          password
        , hash
        , callback
      );
      return;
    }

    callback(404, {contentType: 'text/plain', body: 'Invalid username or password\n'});
  });
}

function insertUser(callback, user) {
  var username = user.username
    , password = user.password
    , successResponse = {contentType: 'text/plain', body: 'User created\n'}
    , errorResponse = {contentType: 'text/plain', body: 'Error creating user\n'};
    ;

  if(username === undefined) {
    errorResponse.body = 'Please enter a username\n';
    callback(400, errorResponse);
    return;
  }

  if(password === undefined || password === '') {
    errorResponse.body = 'Please enter a password\n';
    callback(400, errorResponse);
    return;
  }

  auth.generateHash(
    password,
    mongoInsert.bind(null, callback),
    callback.bind(null, 500, errorResponse)
  );

  function mongoInsert(callback, hash) {
    db.users.insertOne({ username: username, hash: hash }, function(error) {
      if(error) {
        console.error('Error creating user: ', error.message);
        callback(500, errorResponse);
        return;
      }

      callback(201, successResponse);
    });
  }
}

module.exports = {
    findUser: findUser
  , insertUser: insertUser
  , getUsers: getUsers
};
