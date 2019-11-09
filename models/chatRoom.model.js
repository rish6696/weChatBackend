import mongoose from 'mongoose'
const chatRoomSchema = new mongoose.Schema({
   users:[],messages:[]
})

export default chatRoomSchema;