const springs = require('../springs');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('spring').del()
    .then(function () {
      return knex('spring').insert(springs);
    });
};
