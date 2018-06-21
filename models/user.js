var knex = require('../knex');
var bookshelf = require('bookshelf')(knex);
var Posts = require('./post');

var User = bookshelf.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
  posts: function () {
    return this.hasMany(Posts);
  }
});

module.exports = User;
