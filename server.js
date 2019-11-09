import express from 'express'
import dotenv from 'dotenv'
import route from './routes/index'
import mongoose from 'mongoose'
import config from './config'
import http from 'http';
import socket from 'socket.io';
import Models from './models/index';

const app = express();
const server = http.Server(app);
const io = socket(server);



app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let connectedUSerID = {};


io.on('connection', socket => {
    console.log("socked coonected id=" + socket.id);
    socket.on('JOIN_CHAT', async (data) => {
        // console.log(data);

        const sender = data.sender;
        const reciever = data.reciever;
        const chatRoomModel = Models.chatRoomModel();
        let room = await chatRoomModel.find({
            users: { $all: [reciever, sender] }
        })
        if (!room || room.length == 0) {
            const newRoom = new chatRoomModel({
                users: [reciever, sender]
            })
            const savedRoom = await newRoom.save();
            room = [savedRoom];
        }
        socket.join(room[0].id);
        socket.emit('SAVE_ROOM_ID', room[0].id);

    })

    socket.on('disconnect', () => {
        console.log('disconnected with the socket ' + socket.id);
    })

    socket.on('sending_chat', async (data) => {
        console.log(data)
        const roomId = data.roomId;
        const message = data.message;
        socket.broadcast.in(roomId).emit('recieved_chat', message);
        const chatRoomModel=Models.chatRoomModel();
        try {
            const doc= await chatRoomModel.findById(roomId);
            doc.messages=message;
            await doc.save();
        }
        catch (error) { console.log(error)}
       
        //socket.broadcast.emit('chat_recieved',data)
    })
})




mongoose.connect(config.DB_URL)
    .then(x => console.log('mongodb connected successfully'))
    .catch(e => console.log(e))


app.use('/v1', route)
app.use('/', express.static(__dirname + '/public'));

server.listen(5896, x => console.log(`server started`))

//install babel-cli globally for pm2 
//then run pm2 start npm -- run start
//rishabhiam-at-010482212665  username
//MHwiySE1/HcAsHQSgA4f4d89xgk8oomPuTBPI/TMqIo= passss



export default {
    app
}

