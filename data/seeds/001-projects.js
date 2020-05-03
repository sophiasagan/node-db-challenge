exports.seed = async function(knex) {

  await knex('projects').insert([
    {id: 1, project_name: 'Do your homework', description: "This is where you do your homework.", completed: false},
    {id: 2, project_name: 'Clean the Yard', description: "Get up and clean your yard.", completed: false},
    {id: 3, project_name: 'Bake Birthday Cake', description: "Get out and find a job making some real money.", completed: false}
  ]);
};