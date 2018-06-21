var express = require('express');
var router = express.Router();
var knex = require('../knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('users').select('id', 'email', 'full_name')
    .then(data => {
      res.render('index', { title: 'Mis usuarios', users: data });
    })
});

module.exports = router;
