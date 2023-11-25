const express=require('express')
const general=express.Router()
const {addUser}=require('../services/AddUser')
general.post('/firsthello',addUser)

module.exports=general