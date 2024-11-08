const { v4: uuidv4 } = require('uuid');

const userModel = (sequelize, DataTypes) => {
    const users = sequelize.define('user', {
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
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
            type: DataTypes.ENUM,
            values: ["user","admin"],
            defaultValue: "user",
            allowNull: false
        },
        otp: {
            type: DataTypes.INTEGER,
            defaultValue: null,
            allowNull: true
        },
        otpVerify: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false
        },
    }, {
        timestamps: true // This ensures createdAt and updatedAt are added and managed automatically
    });
    return users;
}

module.exports = userModel;