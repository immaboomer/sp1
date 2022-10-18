// import { Sequelize } from 'sequelize';
const sequelize = require("sequelize")
sequelize = new Sequelize('papp', 'root', '', {
    dialect: 'mysql',
    host: 'localhost', 
});

// export default sequelize;