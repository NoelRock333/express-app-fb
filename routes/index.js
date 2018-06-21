var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET home page. */
router.get('/', function(req, res, next) {
  /* knex('users').select('id', 'email', 'full_name')
    .then(data => {
      res.render('index', { title: 'Mis usuarios', users: data });
    })
  */
 User.where('id', 1).fetch({ withRelated: ['posts', 'posts.comments']}).then(function(user) {
    console.log(user.related('posts').toJSON());
  }).catch(function(err) {
    console.error(err);
  });
});

module.exports = router;
