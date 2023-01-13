
exports.up = function(knex) {
  return knex.schema
    .table('stages', async function (table) {
      table.string('tournament_id');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('stages', async function (table) {
      table.dropColumn('tournament_id');
    })
};
