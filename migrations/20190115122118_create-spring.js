
exports.up = function(knex, Promise) {
  return knex.schema.createTable('spring', (table) => {
    table.increments();
    table.text('name');
    table.text('description');
    table.text('location');
    table.float('access rating');
    table.text('url');
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('spring');
};
