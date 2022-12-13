import { ErrorRequestHandler } from 'express'

const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
    console.error(err)
    res.status(500).send({
        err: err?.message || err || 'Unknown Error'
    })
}

export default errorHandler