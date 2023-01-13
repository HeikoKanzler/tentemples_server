
exports.up = function(knex) {
  return knex.schema
    .table('tournament_challenges', async function (table) {
      table.integer('stage_id');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('tournament_challenges', async function (table) {
      table.dropColumn('stage_id');
    })
};
