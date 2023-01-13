
exports.up = function(knex) {
  return knex.schema
    .table('player', async function (table) {
      table.string('internal_name');
      table.string('name');
      table.string('email');
      table.integer('tenant_id');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('player', async function (table) {
      table.dropColumn('internal_name');
      table.dropColumn('name');
      table.dropColumn('email');
      table.dropColumn('tenant_id');
    })
};
