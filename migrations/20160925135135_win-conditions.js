'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('win_conditions', function(table){
    table.increments();
    table.integer('game_id');
    table.boolean('puzzle_1_solved');
    table.boolean('puzzle_2_solved');
    table.boolean('puzzle_3_solved');
    table.boolean('puzzle_4_solved');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('win_conditions');
};
