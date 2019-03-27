// What new changes we need to make
exports.up = function(knex, Promise) {
  return knex.schema.createTable('roles', (table) => {
    // Primary Key (called 'ID') and make it auto-increment
    table.increments();

    table
      .string('Name', 128)
      .notNullable()
      .unique();
  })
};

// how to undo the changes made in the 'up' function
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('roles');
};
