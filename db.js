const Sequelize = require('sequelize')

const sequelize = new Sequelize(`postgres://postgres:$72hourwizards@vpostgres.csmzuruqvoj3.us-west-2.rds.amazonaws.com:5432/Rad_Records`)
// const sequelize = new Sequelize("postgres://postgres:@localhost:5432/workout-log-db")


module.exports = sequelize