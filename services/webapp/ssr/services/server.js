const winston = require('winston')
const express = require('express')
const compression = require('compression')
const helmet = require('helmet')
// const cors = require('cors')

const { errorHandler } = require('../middlewares/error-handler')
const { createAppRouter } = require('../routes')

const app = express()

const init = (settings = {}) => {
    // // enable CORS in development only
    // if (process.env.NODE_ENV === 'development') {
    //     app.use(cors())
    // }

    app.use(helmet())
    app.use(compression())
    app.use(createAppRouter(settings))
    app.use(errorHandler)
}

/**
 * Settings
 * -  port: (string) - server port
 */
const start = ({ port }) => {
    app.listen(port, () => winston.info(`[ssr] server running on ${port}`))
}

module.exports = {
    init,
    start,
}
