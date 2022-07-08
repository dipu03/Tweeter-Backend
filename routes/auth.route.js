const authController = require('../controller/auth.controller');

module.exports = (app) => {

    app.get('/', authController.homePage);

    app.post('/twitter/api/v1/register', authController.register);

    app.post('/twitter/api/v1/signin', authController.login);

    app.get('/twitter/api/v1/findAllUser', authController.fundAllUser);

}