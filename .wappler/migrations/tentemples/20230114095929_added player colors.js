
exports.up = function(knex) {
  return knex.schema
    .table('player', async function (table) {
      table.integer('color').defaultTo(0);
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('player', async function (table) {
      table.dropColumn('color');
    })
};
