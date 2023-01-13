
exports.up = function(knex) {
  return knex.schema
    .table('stages', async function (table) {
      table.string('description');
      table.string('background_image');
      table.integer('difficulty');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('stages', async function (table) {
      table.dropColumn('description');
      table.dropColumn('background_image');
      table.dropColumn('difficulty');
    })
};
