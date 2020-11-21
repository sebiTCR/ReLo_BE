const Router = require('express').Router();
const userController = require('../controllers/UserController')


    Router.route('/accounts')
          .get(userController.getAccounts)

      Router.route('/account/:uname')
            .get(userController.getAccount)
            .post(userController.createUser)
            .put(userController.updateAccount)
            .delete(userController.deleteAccount)


module.exports = Router;