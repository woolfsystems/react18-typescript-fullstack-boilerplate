import express from 'express'
import path from 'path'
import dotenv from 'dotenv'
import helmet from 'helmet'

import apiRouter from './api/'
import errorHandler from './lib/errorHandler'

dotenv.config()

declare global {
    namespace NodeJS {
      interface ProcessEnv {
        PORT: string;
      }
    }
}

process.on('uncaughtException', gracefullyExitProcess)
process.on('unhandledRejection', gracefullyExitProcess)
process.on('SIGINT', gracefullyExitProcess)

const app = express()
const port = process.env.PORT || 3000
app.use(helmet())

//SPA
app.use(express.static(path.join(__dirname, 'public')))

//API
app.use('/api',apiRouter())

// FALLTHROUGH
app.use(errorHandler)

const server = app.listen(port,()=>{
  console.log('[EXP]',`available on http://localhost:${port}`)
})

async function gracefullyExitProcess() {
  server.close(()=>
    process.exit())
}
