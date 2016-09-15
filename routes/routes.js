'use strict';
var router = require('express').Router();
var knex = require('../db/knex');


router.get('/', function(req, res, next){
  knex('mazes').where('id', 1).select('maze_array')
  .then(function(data){
    res.send(JSON.parse(data[0].maze_array));
  });
});
module.exports = router;
