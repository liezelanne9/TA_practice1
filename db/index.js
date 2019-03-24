const Sequelize = require('sequelize');
const sequelize = new Sequelize('todolist1', 'student', 'student', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate()
    .then(() => console.log(`~~~Connected to MySQL database~~~`))

module.exports = sequelize;