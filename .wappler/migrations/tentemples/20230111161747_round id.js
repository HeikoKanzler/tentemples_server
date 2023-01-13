
exports.up = function(knex) {
  return knex.schema
    .table('tournament_challenge_rounds', async function (table) {
      table.renameColumn('fight_id', 'round_id');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('tournament_challenge_rounds', async function (table) {
      table.renameColumn('round_id', 'fight_id');
    })
};
