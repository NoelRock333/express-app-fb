var knex = require('../knex');
var bookshelf = require('bookshelf')(knex);
var User = require('./user');

var Comment = bookshelf.Model.extend({
  tableName: 'comments',
  hasTimestamps: true,
  user: function () {
    return this.belongsTo(User);
  }
});

module.exports = Comment;