const { v4: uuidv4 } = require('uuid');

const studentModel = (sequelize, DataTypes) => {
    const students = sequelize.define('student', {
        id: {
            type: DataTypes.UUID,
            defaultValue: uuidv4,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        college: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        profile: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        timestamps: true // This ensures createdAt and updatedAt are added and managed automatically
    });
    return students;
}

module.exports = studentModel;