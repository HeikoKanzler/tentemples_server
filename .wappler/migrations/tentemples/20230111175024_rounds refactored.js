
exports.up = function(knex) {
  return knex.schema
    .table('tournament_challenge_rounds', async function (table) {
      table.renameColumn('attack_1', 'p1_a1');
      table.renameColumn('attack_2', 'p1_a2');
      table.renameColumn('attack_3', 'p1_a3');
      table.renameColumn('defense_1', 'p1_d1');
      table.renameColumn('defense_2', 'p1_d2');
      table.renameColumn('defense_3', 'p1_d3');
      table.integer('p2_a1');
      table.integer('p2_a2');
      table.integer('p2_a3');
      table.integer('p2_d1');
      table.integer('p2_d2');
      table.integer('p2_d3');
      table.integer('p1_hits');
      table.integer('p2_hits');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('tournament_challenge_rounds', async function (table) {
      table.renameColumn('p1_a1', 'attack_1');
      table.renameColumn('p1_a2', 'attack_2');
      table.renameColumn('p1_a3', 'attack_3');
      table.renameColumn('p1_d1', 'defense_1');
      table.renameColumn('p1_d2', 'defense_2');
      table.renameColumn('p1_d3', 'defense_3');
      table.dropColumn('p2_a1');
      table.dropColumn('p2_a2');
      table.dropColumn('p2_a3');
      table.dropColumn('p2_d1');
      table.dropColumn('p2_d2');
      table.dropColumn('p2_d3');
      table.dropColumn('p1_hits');
      table.dropColumn('p2_hits');
    })
};
