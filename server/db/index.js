var Sequelize = require('sequelize');
var db = new Sequelize({
  database: 'chat',
  username: 'root',
  password: null,
  dialect: 'mysql'
});

const users = db.define('users', {
  username: Sequelize.STRING
});

const messages = db.define('messages', {
  content: Sequelize.STRING
});

const rooms = db.define('rooms', {
  roomname: Sequelize.STRING
});

rooms.hasMany(messages);
messages.belongsTo(rooms);
users.hasMany(messages);
messages.belongsTo(users);

users.sync();
messages.sync();

module.exports = {
  users,
  messages
};



// FOLLOW CODE IS THE NON-SEQUELIZE VERSION
// var mysql = require('mysql');

// // Create a database connection and export it from this file.
// // You will need to connect with the user 'root', no password,
// // and to the database 'chat'.

// var con = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   database: 'chat',
// });

// con.connect(function(err) {
//   err && console.error(err);
//   console.log('Connected!');
// });

// module.exports.connection = con;