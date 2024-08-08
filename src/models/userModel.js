const userModel = (sequelize, DataTypes) => {
    const users = sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
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
        refreshToken: {
            type: DataTypes.STRING,
            defaultValue: '',
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