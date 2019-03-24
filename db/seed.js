const Todos = require('./model.js');

const seedData = [
    { 
    name: "Task 1",
    priority: 1
    },
    { 
    name: "Task 2",
    priority: 2
    },
    { 
    name: "Task 3",
    priority: 3
    }
]

Todos.sync({ force: false })
    .then(() => {
        Todos.bulkCreate(seedData)
        .then(() => console.log(`/// Database seeded ///`))
    })