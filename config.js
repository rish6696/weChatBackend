import dotenv from 'dotenv'
dotenv.config()
const DB_URL=process.env.DB_URL
const JWT_SECRET=process.env.JWT_SECRET
const GOOGLE_CLIENT_ID=process.env.GOOGLE_CLIENT_ID
const fbConfirmUrl='https://graph.facebook.com/v2.5/me?fields=email,name,friends&access_token='

export default {
    DB_URL,JWT_SECRET,fbConfirmUrl,GOOGLE_CLIENT_ID
}