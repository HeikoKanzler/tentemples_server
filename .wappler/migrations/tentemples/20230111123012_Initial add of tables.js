
exports.up = function(knex) {
  return knex.schema
    .createTable('tenant', async function (table) {
      table.increments('tenant_id');
      table.string('name');
      table.string('title');
      table.string('description');
    })
    .createTable('player', async function (table) {
      table.increments('player_id');
    })
    .createTable('tournaments', async function (table) {
      table.increments('tournament_id');
      table.string('name');
      table.string('title');
      table.string('description');
      table.integer('scope').comment('Scope of a tournament (0: private, 1: public, 2: global)');
    })
    .createTable('stages', async function (table) {
      table.increments('stage_id');
      table.string('title');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('stages')
    .dropTable('tournaments')
    .dropTable('player')
    .dropTable('tenant')
};
