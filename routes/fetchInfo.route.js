import express from 'express'
import fetchInfoController from '../controllers/fetchInfo.controller'
import JwtMiddleWare from '../middlewares/authentication';
import validator from 'express-validation'
import fetchInfoValidator from '../validators/fetchInfo.validator'

const router=express.Router();


router.route('/getMessages')
.post(validator(fetchInfoValidator.fetchMessages),JwtMiddleWare,fetchInfoController.getMessages);

router.route('/getUsers/:pgNo')
.post(JwtMiddleWare,fetchInfoController.getAllUsers)

export default router