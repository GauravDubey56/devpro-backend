const { development } = require('./knexfile');
let dbContext = {
  knex: null,
  getContext: function() {
    knex = require('knex')(development);
    return knex;
  },
  destroyContext: function() {
    knex.destroy();
    console.log("Distroy end.");
  }
};
module.exports = dbContext;