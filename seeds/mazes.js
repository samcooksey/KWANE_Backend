'use strict';
exports.seed = function(knex, Promise) {
      return Promise.all([
        // Inserts seed entries
        knex('mazes').insert({maze_array: JSON.stringify([[[-1, -4], [-5, -4], [-5, 4], [3, 4], [3, -1], [2, -1], [2, 3], [-3, 3], [-3, -3], [-1, -3]], [[0, -4], [0, -2], [-2, -2], [-2, 2], [1, 2], [1, -2], [4, -2], [4, 4], [5, 4], [5, -4]]]
      )}),
        // knex('table_name').insert({id: 2, colName: 'rowValue2'}),
        // knex('table_name').insert({id: 3, colName: 'rowValue3'})
      ]);

};
