const express = require('express')

const createExpressRouter = () => {
    const router = express.Router()

    router.get('/', (req, res) => res.send('api ok'))

    return router
}

module.exports = {
    createExpressRouter,
}
