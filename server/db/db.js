const MongoClient = require('mongodb').MongoClient;

var dbName = 'snapchat'
  , url = 'mongodb://localhost:27017/' + dbName
  ;

MongoClient.connect(url, function(error, db) {
  if(error) console.error('Error with database connection: ', error.message);

  if(db.collection('users') !== undefined) {
    module.exports.users = db.collection('users');
  }

  if(db.collection('snaps') !== undefined) {
    module.exports.snaps = db.collection('snaps');
  }

  if(db.collection('friends') !== undefined) {
    module.exports.friends = db.collection('friends');
  }
});
