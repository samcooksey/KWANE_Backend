'use strict';
var router = require('express').Router();
var knex = require('../db/knex');
var http = require('http');

var url = process.env.SITE_URL;
router.get('/', function(req, res, next){
res.json('spun up');
});

router.post('/newGame', function(req, res, next){
  var letters = ['A', 'B', 'C', 'D'];
  var payloads = [1,2,3,4];
  var shuffledPayloads = [];
  var puzzleOptions = [[0,1],[2,3],[4,5],[6,7]];
  var chosenPuzzles = [];
  var id;
  for(var i = 0; i < 4; i++){
    shuffledPayloads.push(payloads[Math.floor(Math.random() * 4)]);
    var puzzleCategory = puzzleOptions.splice(Math.floor(Math.random() * puzzleOptions.length),1)[0];
    chosenPuzzles.push(puzzleCategory[Math.floor(Math.random() * 2)]);
  }
  var orientation = letters[Math.floor(Math.random() * 4)];
  knex('puzzles').orderBy('id')
  .then(function(data){
    return knex('games')
    .insert({player_name: req.body.partnerName, oracle_name: req.body.oracleName,
    puzzle_1: data[chosenPuzzles[0]].puzzle_array, puzzle_1_payload: shuffledPayloads[0], puzzle_1_orientation: (data[chosenPuzzles[0]].id % 2 === 0),
    puzzle_2: data[chosenPuzzles[1]].puzzle_array, puzzle_2_payload: shuffledPayloads[1], puzzle_2_orientation: (data[chosenPuzzles[1]].id % 2 === 0),
    puzzle_3: data[chosenPuzzles[2]].puzzle_array, puzzle_3_payload: shuffledPayloads[2], puzzle_3_orientation: (data[chosenPuzzles[2]].id % 2 === 0),
    puzzle_4: data[chosenPuzzles[3]].puzzle_array, puzzle_4_payload: shuffledPayloads[3], puzzle_4_orientation: (data[chosenPuzzles[3]].id % 2 === 0), orientation: orientation })
    .returning('id');
  })
  .then(function(data){
    id = data;
    return knex('win_conditions').insert({game_id: Number(id[0]), puzzle_1_solved: false, puzzle_2_solved: false, puzzle_3_solved: false, puzzle_4_solved: false});
  })
  .then(function(){
    sendText(Number(req.body.partnerNumber), url + '/#/runner/' + id);
    res.json(id);
  })
  .catch(function(err){
    console.log(err);
  });
});

router.get('/oracle/:id', function(req, res, next){
  knex('games').where('id', req.params.id)
  .then(function(data){
    res.json(data[0])
  })
  .catch(function(err){
    console.log(err);
  })
})

router.get('/runner/:id', function(req, res, next){
  knex('games').where('id', req.params.id)
  .then(function(data){
    res.json(data);
  })
  .catch(function(err){
    console.log(err);
  });
});

router.post('/submitAnswer', function(req, res, next){
  knex('win_conditions').where('game_id', req.body.game_id).update(req.body)
  .then(function(data){
    res.json(data)
    console.log(data);
  })
  .catch(function(err){
    console.log(err);
  });
})
router.get('/submitAnswer/:gameId/:puzzleNumber', function(req, res, next){
  knex('win_conditions').where('game_id', req.params.gameId).select('puzzle_' + req.params.puzzleNumber + '_solved')
  .then(function(data){
    res.json(data[0]['puzzle_' + req.params.puzzleNumber + '_solved']);
  })
  .catch(function(err){
    console.log(err);
  });
});

function sendText(number, url){
  // Twilio Credentials
  var accountSid = 'ACc0570d4645512a68c7bb7a448f9c452b';
  var authToken = process.env.TWILIO_TOKEN;

  //require the Twilio module and create a REST client
  var client = require('twilio')(accountSid, authToken);

  client.messages.create({
      to: '+1' + number,
      from: "+13018886293",
      body: 'Here is a link to the game: ' + url,
  }, function(err) {
      console.log(err);
  });
}


module.exports = router;
