var knexFile = require('./knexfile');
var knex = require('knex')(knexFile[process.env.NODE_ENV || 'development']);

module.exports = knex;