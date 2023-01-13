
exports.up = function(knex) {
  return knex.schema
    .table('tournament_challenges', async function (table) {
      table.dropColumn('attack_1');
      table.dropColumn('attack_2');
      table.dropColumn('attack_3');
      table.dropColumn('defense_1');
      table.dropColumn('defense_2');
      table.dropColumn('defense_3');
      table.dropColumn('response');
    })
    .createTable('tournament_challenge_fights', async function (table) {
      table.increments('fight_id');
      table.integer('challenge_id').unsigned();
      table.foreign('challenge_id').references('challenge_id').inTable('tournament_challenges').onUpdate('CASCADE').onDelete('CASCADE');
      table.datetime('created').defaultTo(knex.fn.now());
      table.datetime('finished');
      table.integer('attack_1');
      table.integer('attack_2');
      table.integer('attack_3');
      table.decimal('defense_1');
      table.integer('defense_2');
      table.integer('defense_3');
      table.integer('winner');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('tournament_challenge_fights')
    .table('tournament_challenges', async function (table) {
      table.integer('attack_1');
      table.integer('attack_2');
      table.integer('attack_3');
      table.integer('defense_1');
      table.integer('defense_2');
      table.integer('defense_3');
      table.integer('response');
    })
};
