const tweetControler = require('../controller/tweet.control');

module.exports = (app) => {
    app.post('/tweet/ api/vi/createTweet', tweetControler.createTweet);

    app.get('/tweet/api/vi/getAllFeed', tweetControler.findAllTweet);

    app.get('/tweet/api/vi/getLimitedFeed', tweetControler.getNewsFeed);
};