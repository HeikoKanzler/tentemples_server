
exports.up = function(knex) {
  return knex.schema
    .createTable('user', async function (table) {
      table.increments('user_id');
      table.string('username');
      table.string('email');
      table.string('password');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('user')
};
