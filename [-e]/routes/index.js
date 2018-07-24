var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

//***Requests handler implementation***
exports.list = function(req, res) {
    res.send('odp zwracająca zasób');
};

module.exports = router;


