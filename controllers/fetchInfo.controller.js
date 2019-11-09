import Models from '../models/index'
import { model } from 'mongoose'
const pageSize=7;
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

async function getMessages(req,res,next){
    console.log('fetch messages trigered')
    const { roomId }=req.body;
    const chatRoomModel=Models.chatRoomModel();
    try {
        const doc=await chatRoomModel.findById(roomId);
        res.send({status:true,data:doc.messages});
    } catch (error) {
        res.send({status:false})
    }
}


export default {
    getAllUsers,getMessages
}