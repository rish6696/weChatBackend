import express from 'express'
import dotenv from 'dotenv'
import route from './routes/index'
import mongoose from 'mongoose'
import config from './config'
import http from 'http';
import socket from 'socket.io';



const app=express();
const server=http.Server(app);
const io=socket(server);



app.use(express.urlencoded({extended:true}));
app.use(express.json());

io.on('connection',socket=>{
    console.log(socket.id);
})


 

mongoose.connect(config.DB_URL,)
.then(x=>console.log('mongodb connected successfully'))
.catch(e=>console.log(e))


app.use('/v1',route)
app.use('/',(req,res)=>res.send('hello'))

server.listen(5896,x=>console.log(`server started`))

//install babel-cli globally for pm2 
//then run pm2 start npm -- run start

