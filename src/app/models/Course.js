const { Sequelize, DataTypes } = require('sequelize');
const db = require('../../config/db');

const Course = db.sequelize.define('courses', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    slug: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
});

(async () => {
    try {
        await db.sequelize.sync({ alter: true });
        console.log('Sync Course model with db successfully');
    } catch (error) {
        console.log('Sync Course model with db fail: ' + String(error));
    }
})();

module.exports = Course;
