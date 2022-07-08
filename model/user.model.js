

module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    userId: {
      type: Sequelize.INTEGER,
      primaryKey : true,
      autoIncrement : true
    },
    username : {
      type : Sequelize.STRING,
      alllowNull : false
    },
    email : {
      type: Sequelize.STRING,
      alllowNull : false
    },
    name : {
      type : Sequelize.INTEGER,
      alllowNull : false
    },
    password : {
      type : Sequelize.STRING,
      alllowNull : false
    }
  })
  return User
};