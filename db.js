const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    logging: false
});

db.authenticate()
.then(()=>console.log('Database connected'))
.catch((e)=>console.log(e))

module.exports = db;