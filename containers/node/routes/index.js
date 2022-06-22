var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.query.accesso) {
    res.render('index',{
      title: 'Trivia Stack',
      user: {
        "username": "tamerhayek",
        "password": "tamer2000"
      }
    });
  } else {
    res.render('index',{
      title: 'Trivia Stack'
    });
  }
});

module.exports = router;
