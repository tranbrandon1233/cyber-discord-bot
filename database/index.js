const Sequelize = require("sequelize");
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'data/database.sqlite'
});

reminders = sequelize.define("reminders", {
  discordID: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  reminderID: {
    type: Sequelize.UUIDV4,
    primaryKey: true,
  },
  remindTime: {
    type: Sequelize.DATE,
  },
  data: {
    type: Sequelize.TEXT,
  },
});

reminders.sync();

module.exports.reminders = reminders;
