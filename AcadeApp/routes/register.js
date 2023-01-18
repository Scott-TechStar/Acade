var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Create Your Account Here!' });
});

module.exports = router;
