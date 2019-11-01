import mongoose from 'mongoose'
import userSchema from './user.model'
import chatRoomSchema from './chatRoom.model';

function userModel(){
    return mongoose.model('users',userSchema)
}

function chatRoomModel(){
    return mongoose.model('chatRoom',chatRoomSchema);
}

export default{
    userModel,chatRoomModel
}