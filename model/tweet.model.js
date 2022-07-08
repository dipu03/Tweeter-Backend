const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const Tweet = sequelize.definr("tweets", {
        id : {
            type : Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        body : {
            type : Sequelize.STRING,
            allowNull : false
        },
        username : {
            type : Sequelize.STRING,
            allowNull : false
        },
        date : {
            type : Sequelize.date,
            default : Date.now()
        }
    })
    return Tweet
};