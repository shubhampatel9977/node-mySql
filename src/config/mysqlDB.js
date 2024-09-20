const { Sequelize, DataTypes } = require('sequelize');

const { DB_HOST, DB_NAME, DB_USER, DB_PASSWORD } = process.env

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'mysql',
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

const DB = {}
DB.sequelize = sequelize;
DB.Sequelize = Sequelize;


//<======================= Import Models =======================>//

// User models
DB.userModel = require("../models/user.model")(sequelize, DataTypes);
DB.studentModel = require("../models/student.model")(sequelize, DataTypes);

// Admin modals
DB.teacherModel = require("../models/admin/teacher.model")(sequelize, DataTypes);


//<======================= Assosiactions =======================>//

// One-To-One relationship with user
// DB.usersModel.hasOne(DB.userAccountInfoModel, { foreignKey: 'user_id'});
// DB.userAccountInfoModel.belongsTo(DB.usersModel, { foreignKey: 'user_id'});


// One-To-Many relationship with user
// DB.usersModel.hasMany(DB.galleryModel, { foreignKey: 'user_id'});
// DB.galleryModel.belongsTo(DB.usersModel, { foreignKey: 'user_id'});

// Sync all models
DB.sequelize.sync({ alter: true }).then(() => {
  console.log("All models were synchronized successfully.");
});

module.exports = { DB, sequelize, Sequelize };
// module.exports = db;
