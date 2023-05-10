const mysql = require("mysql2");
const { Sequelize, DataTypes } = require('sequelize');

const DB_INFO = {
    host: "localhost",
    user: "blog_admin",
    password: "Fullstack@123",
    database: "blog_db",
}
const connect = () => {
  const con = mysql.createConnection({
                host: DB_INFO.host,
                user: DB_INFO.user,
                password: DB_INFO.password,
                database: DB_INFO.database,
  });

  con.connect((err) => {
    if (err) throw err;
    console.log("Connected!!!");
  });
};

// initialize Sequelize with your database configuration
const sequelize = new Sequelize(DB_INFO.database, DB_INFO.user, DB_INFO.password, {
    host: DB_INFO.host,
    dialect: 'mysql',
  });

module.exports = { connect, sequelize };
