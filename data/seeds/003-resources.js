exports.seed = async function(knex) {

  await knex('resources').insert([
    {id: 1, name: 'Computer', description: "Apple or PC."},
    {id: 2, name: 'Pen', description: "Blue or Black ink preferred."},
    {id: 3, name: 'Smartphone', description: "Listen to music during your task."},
    {id: 4, name: 'Desk/Table', description: "Helps posture when completed task."},
    {id: 5, name: 'Bag for yard waste', description: "Reserves all waste such as leaves and branches."},
    {id: 6, name: 'Cake Pan', description: "8 inch or 9 inch preferred."},
  ]);
};