const Sequelize = require('sequelize');
const SETUP = require('./config');
const db = new Sequelize(SETUP.CONFIG.DB_NAME, SETUP.CONFIG.DB_USER, SETUP.CONFIG.DB_PASS, {
    host: SETUP.CONFIG.DB_HOST,
    port: SETUP.CONFIG.DB_PORT,
    dialect: 'mysql',
    logging: false
});

db.authenticate()
.then(()=>console.log('Database connected'))
.catch((e)=>console.log(e))

module.exports = db;