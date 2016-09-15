'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('mazes', function(table){
    table.increments();
    table.text('maze_array');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('mazes');
};
