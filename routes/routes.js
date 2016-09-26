'use strict';
var router = require('express').Router();
var knex = require('../db/knex');
var http = require('http');

var url = '10.7.80.203:8080'
router.get('/', function(req, res, next){
  // knex('mazes').where('id', 1).select('maze_array')
  // .then(function(data){
  //   res.send(JSON.parse(data[0].maze_array));
  // });

  var array = [];
  array.push('00000000000000000');
  array.push('00000000000000000');
  array.push('00000000000000000');
  array.push('00000000000000000');
  array.push('00000000000000000');
  array.push('00000DLLLLLD00000');
  array.push('00000L0C0R0L00000');
  array.push('00000LYDLDCL00000');
  array.push('00000L0LDL0L00000');
  array.push('00000LGDLDYL00000');
  array.push('00000L0R0LPL00000');
  array.push('00000DLLLLLD00000');
  array.push('00000000000000000');
  array.push('00000000000000000');
  array.push('00000000000000000');
  array.push('00000000000000000');
  array.push('00000000000000000');




  var newArray = [];
for(var i = 0; i < array.length; i ++){
  newArray[i] = [];
  for(var j = 0; j < array[i].length; j++){
    if(!isNaN(Number(array[i][j]))){
      newArray[i].push(Number(array[i][j]));
    }else{
      newArray[i].push(array[i][j]);
    }

  }
}
res.json(newArray);
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
  knex('puzzles')
  .then(function(data){
    return knex('games')
    .insert({player_name: req.body.partnerName, oracle_name: req.body.oracleName, puzzle_1: data[chosenPuzzles[0]].puzzle_array, puzzle_1_payload: shuffledPayloads[0], puzzle_1_orientation: (data[chosenPuzzles[0]].id % 2 === 0), puzzle_2: data[chosenPuzzles[1]].puzzle_array, puzzle_2_payload: shuffledPayloads[1], puzzle_2_orientation: (data[chosenPuzzles[1]].id % 2 === 0), puzzle_3: data[chosenPuzzles[2]].puzzle_array, puzzle_3_payload: shuffledPayloads[2], puzzle_3_orientation: (data[chosenPuzzles[2]].id % 2 === 0), puzzle_4: data[chosenPuzzles[3]].puzzle_array, puzzle_4_payload: shuffledPayloads[3], puzzle_4_orientation: (data[chosenPuzzles[3]].id % 2 === 0), orientation: orientation })
    .returning('id');
  })
  .then(function(data){
    id = data;
    return knex('win_conditions').insert({game_id: Number(id[0]), puzzle_1_solved: false, puzzle_2_solved: false, puzzle_3_solved: false, puzzle_4_solved: false});
  })
  .then(function(){
    // sendText(Number(req.body.partnerNumber), url + '/#/runner/' + id);
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
  }, function(err, message) {
      console.log(message.id);
  });
}


module.exports = router;
