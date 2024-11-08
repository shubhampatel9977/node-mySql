const { v4: uuidv4 } = require('uuid');

const teacherModel = (sequelize, DataTypes) => {
    const teachers = sequelize.define('teacher', {
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
    return teachers;
}

module.exports = teacherModel;