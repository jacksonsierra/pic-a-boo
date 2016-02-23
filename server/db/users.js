const db = require('./db')
    , auth = require('./auth')
    ;

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
