const Router = require('express').Router();
const userController = require('../controllers/UserController')


    Router.route('/accounts')
          .get(userController.getAccounts)

    Router.route('/account/')
            .get(userController.loginUser)
            .post(userController.createUser)

    Router.route('/account/:uname')
          .get(userController.getAccount)
          .put(userController.updateAccount)
          .delete(userController.deleteAccount)

module.exports = Router;
