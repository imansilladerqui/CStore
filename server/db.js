const Sequelize = require('sequelize');
const db = new Sequelize('cryptostore', 'paisanoscreando', 'LaClaveSecreta', {
    host: 'paisanoscreando.cskgygedfvbd.sa-east-1.rds.amazonaws.com',
    port: '3306',
    dialect: 'mysql',
    logging: false
});

db.authenticate()
.then(()=>console.log('Database connected'))
.catch((e)=>console.log(e))

module.exports = db;