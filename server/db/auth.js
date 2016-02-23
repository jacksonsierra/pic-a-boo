const bcrypt = require('bcrypt');

var saltLength = 10;

function validateHash(password, hash, callback) {
  bcrypt.compare(password, hash, function(error, result) {
    if(error) {
      console.error('Error validating password: ', error.message);
      callback(500, {contentType: 'text/plain', body: 'Error validating user\n'});
      return;
    }

    if(result) {
      callback(200, {contentType: 'text/plain', body: 'User authenticated\n'});
      return;
    }

    callback(403, {contentType: 'text/plain', body: 'Invalid username or password\n'});
  });
}

function generateHash(password, successCallback, errorCallback) {
  bcrypt.genSalt(saltLength, function(error, salt) {
    if(error) {
      console.error('Error generating salt: ', error.message);
      errorCallback();
      return;
    }

    bcrypt.hash(password, salt, function(error, hash) {
      if(error) {
        console.error('Error hashing password: ', error.message);
        errorCallback();
        return;
      }

      successCallback(hash);
    });
  });
}

module.exports = {
    validateHash: validateHash
  , generateHash: generateHash
};
