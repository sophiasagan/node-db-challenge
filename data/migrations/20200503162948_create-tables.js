
exports.up = async function(knex) {
    await knex.schema.createTable('projects', tbl =>{
        tbl.increments();
        tbl.string('project_name', 255).notNullable();
        tbl.string('description');
        tbl
        .boolean('completed')
        .notNullable()
        .defaultTo(false);
    })

    .createTable('tasks', tbl => {
        tbl.increments();
        tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
        tbl.string('description').notNullable();
        tbl.string('task_name', 255).notNullable();
        tbl.string('additional_notes', 255);
        tbl.boolean('completed').notNullable().defaultTo(false);
    })

    .createTable('resources', tbl => {
        tbl.increments();
        tbl.string('name', 255).notNullable().unique();
        tbl.string('description');
    })

    .createTable('project_resources', tbl => {
        tbl.increments();
        tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
        tbl.integer('resource_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('resources')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
};

exports.down = async function(knex) {
    await knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects');
};