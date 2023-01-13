
exports.up = function(knex) {
  return knex.schema
    .renameTable('tournament_challenge_fights', 'tournament_challenge_rounds')
};

exports.down = function(knex) {
  return knex.schema
    .renameTable('tournament_challenge_rounds', 'tournament_challenge_fights')
};
