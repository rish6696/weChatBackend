import express from 'express'
import dotenv from 'dotenv'
import route from './routes/index'
import mongoose from 'mongoose'
import config from './config'

const app=express();
app.use(express.urlencoded({extended:true}))
app.use(express.json())
 

mongoose.connect(config.DB_URL)
.then(x=>console.log('mongodb connected successfully'))
.catch(e=>console.log(e))


app.use('/v1',route)

app.listen(5896,x=>console.log(`server started`))