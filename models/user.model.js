import mongoose from 'mongoose'
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String,required:true },
    createdAt: { type: Date, default: new Date() },
    source:{type:String,required:true},
    lastLogin:{type:Date},
    socialToken:{type:String,required:true}
})

export default userSchema