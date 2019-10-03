import express from 'express'
import fetchInfoController from '../controllers/fetchInfo.controller'
import JwtMiddleWare from '../middlewares/authentication';

const router=express.Router();



router.route('/getUsers/:pgNo')
.post(JwtMiddleWare,fetchInfoController.getAllUsers)

export default router