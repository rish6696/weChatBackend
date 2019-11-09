import Joi from 'joi'

const fetchMessages= {
    body:{
        JWT_TOKEN:Joi.string().required(),
        roomId:Joi.string().required()
    }
}

export default{
    fetchMessages
}