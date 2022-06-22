var express = require('express');
var router = express.Router();
var request = require('request');

//calling request function
var apiKey="8jg7Z2V7Fgcd3T4SHkhCiYyy6LvZCwL6WoMJo46K";
var limit = "1";
var category = "";
var tag = "";
var difficulty = "";

/* GET domande */
router.get('/', function(req, res, next) {
    request("https://quizapi.io/api/v1/questions?apiKey=" + apiKey + "&limit=" + limit +"&category=" + category + "&tag=" + tag + "&difficulty" + difficulty, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            const quiz = JSON.parse(body);
            //console.log(quiz[0]);
            res.render('quiz', {
                title: 'Trivia Stack',
                quiz: quiz[0]
            });
        } else {
            console.log("Error request");
        }
    });
});

module.exports = router;
