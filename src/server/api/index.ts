import express from 'express'
import getTest from './getTest'

export default ()=>{
    const router = express.Router()
    
    router.get('/getTest',getTest)

return router
}