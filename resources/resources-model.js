const db = require('../data/dbConfig');

module.exports = {
    getResources,
    addResources,
    removeResources
}

function getResources () {
    return db('resources');
};


function addResources(newResource) {
    return db('resources')
    .insert(newResource)
}


function removeResources (id) {
    return db('resources')
    .where('id' , id)
    .del();
}