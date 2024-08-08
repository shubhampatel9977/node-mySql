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

const db = {}
db.sequelize = sequelize;
db.Sequelize = Sequelize;


//<======================= Import Models =======================>//

// User models
db.userModel = require("../models/user.model")(sequelize, DataTypes);
db.studentModel = require("../models/student.model")(sequelize, DataTypes);

// Admin modals
db.teacherModel = require("../models/admin/teacher.model")(sequelize, DataTypes);

// Sync all models
db.sequelize.sync({ alter: true }).then(() => {
  console.log("All models were synchronized successfully.");
});

module.exports = db;
