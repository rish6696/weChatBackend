import mongoose from 'mongoose'
const chatRoomSchema = new mongoose.Schema({
   users:[]
})

export default chatRoomSchema;