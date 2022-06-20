const authRouter = require('./auth')
const checkRouter = require('express').Router();
const {checkCurrentUser} = require('../controllers/checks')
checkRouter
    .get('/', checkCurrentUser)
module.exports = {
    authRouter, checkRouter
}