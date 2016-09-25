'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('puzzles', function(table){
    table.increments();
    table.text('puzzle_array');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('puzzles');
};
