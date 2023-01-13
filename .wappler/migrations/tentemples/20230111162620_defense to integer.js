
exports.up = function(knex) {
  return knex.schema
    .table('tournament_challenge_rounds', async function (table) {
      table.integer('defense_1').alter();
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('tournament_challenge_rounds', async function (table) {
      table.decimal('defense_1').alter();
    })
};
