
exports.up = function(knex) {
  return knex.schema
    .table('user', async function (table) {
      table.integer('tenant_id').unsigned();
      table.foreign('tenant_id').references('tenant_id').inTable('tenant').onUpdate('CASCADE').onDelete('CASCADE');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('user', async function (table) {
      table.dropForeign('tenant_id');
      table.dropColumn('tenant_id');
    })
};
