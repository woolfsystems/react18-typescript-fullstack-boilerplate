import { Request, Response } from "express"

export default (_req: Request, res: Response)=>{
    console.log('[API]','hit getTest')
    try{
        res.status(200).json({
            ok: true
        })
    }catch(e){
        res.status(500).json({
            err: e.toString()
        })
    }
}