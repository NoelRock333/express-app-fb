var express = require('express');
var router = express.Router();
var knexFile = require('../knexfile');
var knex = require('knex')(knexFile[process.env.NODE_ENV || 'development']);

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
    res.json(data);
  })
  .catch(err => {
    console.log(err);
    res.send('error');
  })
})

module.exports = router;
