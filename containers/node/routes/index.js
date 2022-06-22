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

/* GET contatti. */
router.get('/contatti/', function(req, res, next) {
  if (req.query.accesso) {
    res.render('contatti',{
      title: 'Trivia Stack | Contatti',
      user: {
        "username": "tamerhayek",
        "password": "tamer2000"
      }
    });
  } else {
    res.render('contatti',{
      title: 'Trivia Stack | Contatti'
    });
  }
});

/* GET classifica. */
router.get('/classifica/', function(req, res, next) {
  var array = [
    { 
      'nome': 'Tamer Hayek',
      'username': 'tamerhayek',
      'punteggio': '34'
    },
    { 
      'nome': 'Diana Calugaru',
      'username': 'dianacalugaru',
      'punteggio': '14'
    },
    { 
      'nome': 'Andrea Bianchi',
      'username': 'andreabianchi',
      'punteggio': '3'
    },
    { 
      'nome': 'Laura Marini',
      'username': 'lauramarini',
      'punteggio': '16'
    },
    { 
      'nome': 'Tamer Hayek',
      'username': 'tamerhayek',
      'punteggio': '30'
    },
    { 
      'nome': 'Tamer Hayek',
      'username': 'tamerhayek',
      'punteggio': '6'
    },
    { 
      'nome': 'Tamer Hayek',
      'username': 'tamerhayek',
      'punteggio': '2'
    },
    { 
      'nome': 'Tamer Hayek',
      'username': 'tamerhayek',
      'punteggio': '19'
    },
    { 
      'nome': 'Tamer Hayek',
      'username': 'tamerhayek',
      'punteggio': '24'
    },
    { 
      'nome': 'Tamer Hayek',
      'username': 'tamerhayek',
      'punteggio': '20'
    }
  ];
  if (req.query.accesso) {
    res.render('classifica',{
      title: 'Trivia Stack | Classifica',
      user: {
        "username": "tamerhayek",
        "password": "tamer2000"
      },
      'giocatori': array
    });
  } else {
    res.render('classifica',{
      title: 'Trivia Stack | Classifica',
      'giocatori': array
    });
  }
});


/* GET accesso. */
router.get('/accedi/', function(req, res, next) {
  if (req.query.accesso) {
    res.render('accedi',{
      title: 'Trivia Stack | Accesso',
      user: {
        "username": "tamerhayek",
        "password": "tamer2000"
      }
    });
  } else {
    res.render('accedi',{
      title: 'Trivia Stack | Accesso'
    });
  }
});

/* GET registrazione. */
router.get('/registrati/', function(req, res, next) {
  if (req.query.accesso) {
    res.render('registrati',{
      title: 'Trivia Stack | Registrazione',
      user: {
        "username": "tamerhayek",
        "password": "tamer2000"
      }
    });
  } else {
    res.render('registrati',{
      title: 'Trivia Stack | Registrazione'
    });
  }
});


/* GET profilo. */
router.get('/profilo/', function(req, res, next) {
  if (req.query.accesso) {
    res.render('profilo',{
      title: 'Trivia Stack | Profilo Utente',
      user: {
        "username": "tamerhayek",
        "password": "tamer2000"
      }
    });
  } else {
    res.render('profilo',{
      title: 'Trivia Stack | Profilo Utente'
    });
  }
});

/* GET sfida. */
router.get('/sfida/', function(req, res, next) {
  if (req.query.accesso) {
    res.render('sfida',{
      title: 'Trivia Stack | Sfide',
      user: {
        "username": "tamerhayek",
        "password": "tamer2000"
      }
    });
  } else {
    res.render('sfida',{
      title: 'Trivia Stack | Sfide'
    });
  }
});

module.exports = router;
