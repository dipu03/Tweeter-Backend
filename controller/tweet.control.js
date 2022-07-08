
const { response } = require("express");
const db = require("../model");
const User = db.user;
const Tweet = db.tweet;
const Follower = db.follower;

exports.createTweet = (req, res) => {
    const tweet = {
        body : req.body.body,
        username : req.body.username
    }

    User.findOne({
        where : {username : tweet.username}
    }).then(user => {
        if(user){
            Tweet.create(tweet).then(res => {
                res.status(201).send({message : "new Tweet crated Successfully"})
            }).catch(err => {
                res.status(500).send({message : "some internal error occured while creating new tweet"})
            })
        }else{
            return res.status(400).send({message : "user not Found"})
        }
    })
};

exports.findAllTweet = (req, res) => {
    let body1 = req.query.body;
    let promise;
    if(body1){
        promise = Tweet.findAll({
            where : {body : body1}
        })
    }else{
        promise = Tweet.findAll()
    }

    promise.then(response => {
        res.status(200).send(response)
    }).catch(err => {
        res.status(500).send({message : "some internal error occured"})
    })
};


exports.getNewsFeed = (req, res) => {
    const limitValue = req.query.limit || 10;
    const skipValue = req.query.skip || 10;

    Tweet.findAll().then(response => {
        response.sort({date : "desc"}).limit(limitValue).skip(skipValue);
        res.status(200).send(response)
    }).catch(err => {
        res.status(500).send({message : "internal error while fetching feed"})
    })
};