const Sequelize = require('sequelize');
const dbConfig = require('../config/db.config.json');

const env = "development";
const dbSetting = dbConfig[env];

const sequelize = new Sequelize(
    dbSetting.username,
    dbSetting.password,
    dbSetting.database,
    dbSetting.dialectInfo
)

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;


// Adding into db
db.user = require('./user.model')(sequelize, Sequelize);
db.tweet = require("./tweet.model")(sequelize, Sequelize);
db.following = require("./following.model")(sequelize, Sequelize);
db.follower = require("./follower.model")(sequelize, Sequelize);

// relationship
db.user.hasMany(db.tweet);
db.user.hasMany(db.follower);

// exporting db
module.exports = db;

