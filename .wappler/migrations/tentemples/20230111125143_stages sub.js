
exports.up = function(knex) {
  return knex.schema
    .createTable('tournament_stages', async function (table) {
      table.increments('stage_id');
      table.integer('tournament_id').unsigned();
      table.foreign('tournament_id').references('tournament_id').inTable('tournaments').onUpdate('CASCADE').onDelete('CASCADE');
      table.string('title');
      table.string('description');
      table.string('background_image');
      table.string('difficulty');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('tournament_stages')
};
