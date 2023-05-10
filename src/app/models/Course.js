const { Sequelize, DataTypes } = require('sequelize');
const db = require('../../config/db');

const Course = db.sequelize.define('courses', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true,
    },
});

(async () => {
    try {
        await db.sequelize.sync();
    } catch (error) {
        console.log('Sync Course model with db fail: ' + String(error));
    }
})();

module.exports = Course;
