const express = require('express')
const router = express.Router();


const ControllerU = require('./Users/userController')




//users 

router.post('/addUser' , ControllerU.addUser);
router.post('/login' , ControllerU.login);



module.exports =router;