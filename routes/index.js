var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/chatroom', function(req, res){
	res.render('chatroom', { title: 'Express Chat' });
});

module.exports = router;
