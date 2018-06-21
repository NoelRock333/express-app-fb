var express = require('express');
var router = express.Router();
var knex = require('../knex');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users/user');
});

router.post('/', function(req, res, next) {
  knex('users').insert({
    email: 'noel@michelada.io',
    password_hash: '',
    full_name: 'Noel Escobedo'
  })
  .then(data => {
    res.redirect('/');
  })
  .catch(err => {
    console.log(err);
    res.send('error');
  })
})

module.exports = router;
