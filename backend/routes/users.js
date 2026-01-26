var express = require('express');
var router = express.Router();

var userJsons = [
  {
    "userId": 1,
    "username": 'Nyi Nyi Aung',
    "age": 26,
  },
  {
    "userId": 2,
    "username": 'Naw Lair Larr Htoo',
    "age": 29,
  }
];

/* GET users listing. */
router.get('/hello', function(req, res, next) {
  res.send('Hello from users route.');
});

router.get('/', function(req, res, next) {
  res.json(userJsons)
});

router.get('/:id', function(req, res, next) {
  res.json(userJsons.filter(userJson => userJson.userId == req.params.id));
});
module.exports = router;
