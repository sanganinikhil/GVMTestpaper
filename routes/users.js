var express = require('express');
var router = express.Router();
const userModel = require("./../module/user");
const authModel = require("../module/auth");
const jwt = require('jsonwebtoken')
const secret = "qsewdxd2v5gs7x6k34pyd845cvsdc3251x"
const bcrypt = require('bcrypt')
const saltRounds = 10;

const GetUserData = async(req, res, next) => {
  try {
    const getdata = await userModel.find();
    return res.send({data : getdata}) 
  } catch (error) {
    next(error);
  }
}

const AddUserData = async(req, res,next) => {
  try {
    const adddata = await userModel(req.body).save();
    return res.send({data : adddata})    
  } catch (error) {
    next(error);
  }
}

const UpdateuserData = async(req,res, next) => {
  try {
    const userid = req.params.id;
    const updatedata = await userModel.updateOne({_id : userid}, {$set : req.body});
    return res.send({data : updatedata});
  } catch (error) {
    next(error)
  }
}

const DeleteUserdata = async(req,res,next) => {
  try {
    const userid = req.params.id;
    await userModel.findByIdAndDelete({_id : userid});
    return res.send({message : "user delete successfully"});
  } catch (error) {
    next(error)
  }
}

const registration = async(req,res,next) => {
  try {
    let finduser = await authModel.findOne({username : req.body.username})
    if(finduser) return res.send ("user already exists")
    req.body.password = await bcrypt.hash(req.body.password, saltRounds)
    const createAuthuser = await authModel(req.body).save();
    return res.send({data : createAuthuser })
  } catch (error) {
    next(error);
  }
}

const login = async(req, res, next) => {
  try {
    const findAuthuser = await authModel.findOne({username : req.body.username});
    if(!findAuthuser) return res.send (" user does not exists");
    let checkpassword = await bcrypt.compareSync(req.body.password, findAuthuser.password);
    if(!checkpassword) return res.send ("password does not match");
    const token = await jwt.sign(req.body, secret)
    return res.send ({data : findAuthuser, token})
  } catch (error) {
    next(error);
  }
}

router.get('/', GetUserData );
router.post('/add', AddUserData);
router.put('/update/:id', UpdateuserData);
router.delete('/delete/:id  ', DeleteUserdata);
router.post('/registration',registration);
router.post('/login', login)
module.exports = router;
