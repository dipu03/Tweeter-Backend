
const db = require('../model');
const User = db.user;
const Follower = db.follower;


exports.createFolllower = (req, res) => {
    let followerData = {
        id : req.body.id,
        followerId : req.body.followerId
    }
    User.findByPk(followerData.id).then(user => {
        if(!user){
            return res.status(401).send({message : "user not found"})
        }
        User.findByPk(followerId).then(user => {
            if(!user){
                return res.status(401).send({message : "follower not found"})
            }

            Follower.create(followerData).then(res => {
                res.status(200).send(res)
            }).catch(err => {
                res.status(500).send({message : "internal error"})
            })
        })
    })
};


exports.unfollow = (req, res) => {
    let followerId = req.params.id;
    Follower.destroy({
        where : {id : followerId}
    }).then(res => {
        res.sendStatus(200).send({message : "following removed successfully"})
    }).catch(err => {
        res.sendStatus(500).send({message : "internal eror"})
    })
};