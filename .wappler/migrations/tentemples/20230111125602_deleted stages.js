
exports.up = function(knex) {
  return knex.schema
    .dropTable('stages')
};

exports.down = function(knex) {
  return knex.schema
    .createTable('stages', async function (table) {
      table.increments('stage_id').primary().notNullable();
      table.string('title', 255);
      table.string('description', 255);
      table.string('background_image', 255);
      table.integer('difficulty');
      table.string('tournament_id', 255);
    })
};
