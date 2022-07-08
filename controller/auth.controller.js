


const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require('../model/index');
const User = db.user;
const secretKey = require('../config/secretKey')


exports.homePage =(req, res) => {
    res.status(200).send({message : "Welcome To Our Home Page"})
};


exports.register = (req, res) => {
    let userData = {
        username : req.body.username,
        email : req.body.email,
        name : req.body.name,
        password : bcrypt.hashSync(req.body.password, 10)
    }

    User.findOne({
        where : {username : req.body.username}
    }).then(user => {
        if(user){
            res.status(400).send({message : "user already exists"})
            return
        }
        User.findOne({
            where : {email : req.body.email}
        }).then(user => {
            if(user){
                res.status(400).send({message : "user already exists"})
                return
            }
            User.create(userData).then(response => {
                res.status(201).send({message : "user created successfylly"})
            }).catch(err => {
                res.status(500).send({message : "some internal server error occured while creatimg new user"})
            })
        })
    })
};


exports.login = (req, res) => {
    let currUserData = {
        username : req.body.username,
        password : req.body.password
    }

    User.findOne({
        where : {username : currUserData.username}
    }).then(user => {

        if(!user){
            res.status(404).send({message : "username is invalid"})
            return
        }

        let isValidPassword = bcrypt.compareSync(currUserData.password, user.password);
        if(!isValidPassword){
            res.status(401).send({message : "invalid password"})
            return
        }
        let token = jwt.sign({userId : user.userId}, secretKey.secret, {expiresIn :86400 });
        
        res.status(200).send({
            userId : user.id,
            username : user.username,
            email : user.email,
            accessToken : token
        })

    })
};


exports.fundAllUser = (req, res) => {
    User.findAll().then(userList => {
        let formatUserList = [];
        userList.forEach(user => {
            formatUserList.push({
                userId : user.userId,
                username : user.username
            })
        })
        res.status(200).send({
            formatUserList
        })
    }).catch(err => {
        res.status(500).send({message : "some internal error occured while fetching all user"})
    })
};







