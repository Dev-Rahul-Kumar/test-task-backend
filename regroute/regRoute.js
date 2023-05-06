const control = require('../regctrl/regctrl')
const express =require('express')


const route = express.Router()


route.post('/register-user',control.add)
route.get('/get-user',control.get)


module.exports=route