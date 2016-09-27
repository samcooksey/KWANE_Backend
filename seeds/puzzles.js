'use strict';
exports.seed = function(knex, Promise) {
      return Promise.all([
        // Inserts seed entries
        knex('puzzles').insert({id: 1, puzzle_array: JSON.stringify(
          [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0],[0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0],[0,0,0,0,1,0,1,0,2,0,0,1,0,1,0,0,0],[0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0],[0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0],[0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],[0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]
        )}),
        knex('puzzles').insert({id: 2,puzzle_array: JSON.stringify(
          [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0],[0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0],[0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0],[0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0],[0,0,0,1,0,1,0,0,2,0,1,0,1,0,0,0,0],[0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0],[0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0],[0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0],[0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0],[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]
        )}),
        knex('puzzles').insert({id: 3, puzzle_array: JSON.stringify(
          [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,5,5,5,5,5,0,0,0,0,3,3,3,0,0],[0,0,0,5,5,5,5,5,0,3,3,3,3,4,3,0,0],[0,0,0,5,5,6,5,5,0,3,4,3,3,3,3,0,0],[0,0,0,5,5,5,5,5,0,3,3,3,0,0,0,0,0],[3,3,3,5,5,5,5,5,0,0,0,0,0,0,0,0,0],[3,4,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[3,3,3,0,0,0,0,0,0,0,0,0,0,3,3,3,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,3,4,3,0],[0,0,0,0,0,0,5,5,5,5,5,0,0,3,3,3,0],[0,0,0,0,0,0,5,5,5,5,5,0,0,0,0,0,0],[0,3,3,3,0,0,5,5,6,5,5,0,0,0,0,0,0],[0,3,4,3,0,0,5,5,5,5,5,0,0,0,0,0,0],[0,3,3,3,0,0,5,5,5,5,5,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]
        )}),
        knex('puzzles').insert({id: 4, puzzle_array: JSON.stringify(
          [[0,0,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,3,4,3,0,3,3,3,0,0,5,5,5,5,5,0],[0,0,3,3,3,0,3,4,3,0,0,5,5,5,5,5,0],[0,0,0,0,0,0,3,3,3,0,0,5,5,6,5,5,0],[0,0,0,0,0,0,0,0,0,0,0,5,5,5,5,5,0],[0,0,5,5,5,5,5,0,0,0,0,5,5,5,5,5,0],[0,0,5,5,5,5,5,0,0,0,0,0,0,0,0,0,0],[0,0,5,5,6,5,5,0,0,0,3,3,3,0,0,0,0],[0,0,5,5,5,5,5,0,0,0,3,4,3,0,0,0,0],[0,0,5,5,5,5,5,0,0,0,3,3,3,0,0,0,0],[0,0,0,0,0,0,0,3,3,3,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,3,4,3,0,5,5,5,5,5,0],[0,3,3,3,0,0,0,3,3,3,0,5,5,5,5,5,0],[0,3,4,3,0,0,0,0,0,0,0,5,5,6,5,5,0],[0,3,3,3,0,0,0,0,0,0,0,5,5,5,5,5,0],[0,0,0,0,0,0,0,0,0,0,0,5,5,5,5,5,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]
        )}),
        knex('puzzles').insert({id: 5, puzzle_array: JSON.stringify(
          [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,7,0,0,0,7,0,0,0,0,0,0],[0,0,0,0,0,0,8,0,0,0,8,0,0,0,0,0,0],[0,0,0,0,0,0,7,0,0,0,7,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]
        )}),
        knex('puzzles').insert({id: 6, puzzle_array: JSON.stringify(
          [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,7,8,7,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,7,8,7,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]
        )}),
        knex('puzzles').insert({id: 7, puzzle_array: JSON.stringify(
          [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,"D","L","L","L","L","L","D",0,0,0,0,0],[0,0,0,0,0,"L","P","C",0,"R",0,"L",0,0,0,0,0],[0,0,0,0,0,"L","Y","D","L","D","C","L",0,0,0,0,0],[0,0,0,0,0,"L",0,"L",0,"L",0,"L",0,0,0,0,0],[0,0,0,0,0,"L","G","D","L","D","Y","L",0,0,0,0,0],[0,0,0,0,0,"L",0,"R",0,"L",0,"L",0,0,0,0,0],[0,0,0,0,0,"D","L","L","L","L","L","D",0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]
        )}),
        knex('puzzles').insert({id: 8, puzzle_array: JSON.stringify(
          [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,"D","L","L","L","L","L","D",0,0,0,0,0],[0,0,0,0,0,"L",0,"C",0,"R",0,"L",0,0,0,0,0],[0,0,0,0,0,"L","Y","D","L","D","C","L",0,0,0,0,0],[0,0,0,0,0,"L",0,"L",0,"L",0,"L",0,0,0,0,0],[0,0,0,0,0,"L","G","D","L","D","Y","L",0,0,0,0,0],[0,0,0,0,0,"L",0,"R",0,"L","P","L",0,0,0,0,0],[0,0,0,0,0,"D","L","L","L","L","L","D",0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]
        )})

      ]);

};
