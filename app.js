const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const db = require("./model");
const PORT = process.env.PORT || 3000 ;



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

function init(){
    let userData = [{
        email : "abc@gmail.com",
        userName : "abc@123",
        name : "abc"
    }, {
        email : "def@gmail.com",
        userName : "def@123",
        name : "def"
    }];
    
    let tweetData = [{
        body : "hello world",
        userName : "abc@123"
    }, 
    {
        body : "hello world1",
        userName : "def@123"
    }];
    
    db.user.bulkCreate(userData).then(() => {
        console.log("userData initialized")
    }).catch(err => {
        console.log(err)
    })

    db.tweet.bulkCreate(tweetData).then(() => {
        console.log("twitter data initialized")
    }).catch(err => {
        console.log(err)
    })
};



db.sequelize.sync({force : true}).then(() => {
    init()
    console.log("successfylly connected with db ans initialize data")
}).catch(err => {
    console.log("unable to connect with db", err)
});


require('./routes/auth.route')(app);
require('./routes/tweet.route')(app);
require('./routes/follower.route')(app);

app.listen(PORT, ()=> {
    console.log("server is runing  at port : "+ PORT)
});