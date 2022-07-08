

module.exports = (Sequelize, sequelize) => {
    const Follower = sequelize.define("followers", {
        id : {
            type : Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        followerId : {
            type : Sequelize.INTEGER,
            allowNull : false
        }
    })
    return Follower
};