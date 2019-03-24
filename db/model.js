const Sequelize = require('sequelize');
const sequelize = require('./index.js');

const Todos = sequelize.define('todos', {
    name: { type: Sequelize.STRING, allowNull: false },
    priority: { type: Sequelize.INTEGER, allowNull: false }
})

sequelize.sync()
    .then(() => console.log(`****Synced Todos table with MySQL****`))

module.exports = Todos;