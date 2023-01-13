
exports.up = function(knex) {
  return knex.schema
    .table('tournaments', async function (table) {
      table.integer('tenant_id');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('tournaments', async function (table) {
      table.dropColumn('tenant_id');
    })
};
