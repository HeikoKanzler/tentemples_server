
exports.up = function(knex) {
  return knex.schema
    .table('tournament_challenge_rounds', async function (table) {
      table.integer('p1_hits').defaultTo(0).alter();
      table.integer('p2_hits').defaultTo(0).alter();
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('tournament_challenge_rounds', async function (table) {
      table.integer('p1_hits').defaultTo().alter();
      table.integer('p2_hits').defaultTo().alter();
    })
};
