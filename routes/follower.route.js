const followerController = require('../controller/follower.controller');

module.exports = (app) => {

    app.post('/twitter/api/v1/follow', followerController.createFolllower);

    app.post('/twitter/api/vi/unfollow/:id', followerController.unfollow);
};