
exports.up = function(knex) {
  return knex.schema
    .table('player', async function (table) {
      table.integer('tenant_id').defaultTo(1).alter();
      table.integer('score').defaultTo(0);
      table.integer('dan').defaultTo(0);
    })
    .table('tournaments', async function (table) {
      table.datetime('created').defaultTo(knex.fn.now());
    })
    .createTable('tournament_challenges', async function (table) {
      table.increments('challenge_id');
      table.integer('tournament_id').unsigned();
      table.foreign('tournament_id').references('tournament_id').inTable('tournaments').onUpdate('CASCADE').onDelete('CASCADE');
      table.datetime('created').defaultTo(knex.fn.now());
      table.integer('player_1');
      table.integer('player_2');
      table.integer('attack_1');
      table.integer('attack_2');
      table.integer('attack_3');
      table.integer('defense_1');
      table.integer('defense_2');
      table.integer('defense_3');
      table.integer('winner');
      table.datetime('finished');
      table.integer('response');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('tournament_challenges')
    .table('tournaments', async function (table) {
      table.dropColumn('created');
    })
    .table('player', async function (table) {
      table.integer('tenant_id').defaultTo().alter();
      table.dropColumn('score');
      table.dropColumn('dan');
    })
};
