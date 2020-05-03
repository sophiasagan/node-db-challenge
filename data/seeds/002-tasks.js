exports.seed = async function(knex) {

  await knex('tasks').insert([
    {
      id: 1,
      task_name: 'Fork',
      description: 'Fork the github repo.',
      additional_notes: 'Create a forked copy of the project.',
      project_id: 1,
      completed: false
    },

    {
      id: 2,
      task_name: 'Add TL',
      description: 'Add your Team Lead.',
      additional_notes: 'Add your team lead as collaborator in SETTINGS on your Github repo.',
      project_id: 1,
      completed: false
    },

    {
      id: 3,
      task_name: 'Clone',
      description: 'Clone the repo.',
      additional_notes: 'Clone the forked version of the repo to your local machine.',
      project_id: 1,
      completed: false
    },
  ]);
};