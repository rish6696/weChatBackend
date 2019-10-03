import Models from '../models/index'
import { model } from 'mongoose'
const pageSize=2;
function getAllUsers(req,res,next){

    console.log('trigeered',req.body,req.params)
    const {pgNo} =req.params;
    const userID=req.user;
    const userModel=Models.userModel();
    userModel.find({_id:{$ne:userID}},{_id:1,name:1})
    .skip((pgNo-1)*pageSize)
    .limit(pageSize)
    .then(x=>res.send({status:true,data:x}))
    .catch(x=>{
        console.log(x)
        res.send({status:false,error:x})
    })

}


export default {
    getAllUsers
}