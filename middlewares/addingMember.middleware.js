const db = require('../model/index');

const limitMember = (req, res, next) => {
    const Users = req.body.userIds;
    if(Users.length>5){
        res.status(400).send({message : "maximum member reache for this group"})
        return;
    }
    next()
};
module.exports = {limitMember}