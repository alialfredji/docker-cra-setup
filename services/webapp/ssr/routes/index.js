
const express = require('express')
// const bodyParser = require('body-parser')
// const cookieParser = require('cookie-parser')

// const { requestData } = require('../middlewares/request-data')
const { createSSRRouter } = require('create-react-app-ssr/lib/create-ssr-router')
const { createGraphqlRouter } = require('./graphql')
const { createExpressRouter } = require('./express')

const createAppRouter = (settings) => {
    const router = express.Router()

    // // those are necessary to share session detection with the client app
    // router.use(bodyParser.json())
    // router.use(cookieParser())
    // router.use(requestData())

    // serve data API
    router.use('/api/express', createExpressRouter())
    router.use('/api/graphql', createGraphqlRouter())

    // ssr - serve client app
    // create-react-app-ssr
    router.use(createSSRRouter(settings))

    return router
}

module.exports = {
    createAppRouter,
}
