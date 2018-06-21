var knex = require('../knex');
var bookshelf = require('bookshelf')(knex);
var User = require('./user');
var Comment = require('./comment');

var Post = bookshelf.Model.extend({
  tableName: 'posts',
  hasTimestamps: true,
  user: function() {
    return this.belongsTo(User);
  },
  comments: function() {
    return this.hasMany(Comment);
  }
});

module.exports = Post;
