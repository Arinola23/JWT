const express = require('express');
const router = express.Router();
const {login,dashboard} = require('../controllers/main');

//the auth middleware is going to protect the dashboard
//every user that clicks on the dashboard route, will go through the middleware.
const authMiddleware = require('../middleware/auth')
router.route('/dashboard').get(authMiddleware, dashboard);
router.route('/login').post(login)
// router.route('/').post(createUser)
module.exports =router 