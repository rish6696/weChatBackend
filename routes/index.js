import express from 'express'
import authRoute from '../routes/auth.route'
import fetchRoute from '../routes/fetchInfo.route'
const router=express.Router()

router.use('/auth',authRoute)
router.use('/fetch',fetchRoute)
export default router
