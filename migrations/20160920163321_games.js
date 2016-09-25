'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('games', function(table){
    table.increments();
    table.string('player_name');
    table.string('oracle_name');
    table.string('orientation');
    table.text('puzzle_1');
    table.integer('puzzle_1_payload');
    table.boolean('puzzle_1_orientation');
    table.text('puzzle_2');
    table.integer('puzzle_2_payload');
    table.boolean('puzzle_2_orientation');
    table.text('puzzle_3');
    table.integer('puzzle_3_payload');
    table.boolean('puzzle_3_orientation');
    table.text('puzzle_4');
    table.integer('puzzle_4_payload');
    table.boolean('puzzle_4_orientation');
  });
};

exports.down = function(knex, Promise) {
return knex.schema.dropTable('games');
};
