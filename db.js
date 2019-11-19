const Sequelize = require('sequelize');
const db = new Sequelize('cryptostore', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

db.authenticate()
.then(()=>console.log('Database connected'))
.catch((e)=>console.log(e))

module.exports = db;