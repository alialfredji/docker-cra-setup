const path = require('path')
const winston = require('winston')
const { get: getConfig } = require('@marcopeg/utils/lib/config')

// Include Services
const env = require('./ssr/services/env')
const server = require('./ssr/services/server')

const boot = async () => {
    try {
        // init services
        winston.verbose('[boot] init services...')
        await env.init()

        await server.init({
            ssrRoot: getConfig('SSR_ROOT', path.join(__dirname, 'src')),
            ssrBuild: getConfig('SSR_BUILD', path.join(__dirname, 'build')),
            ssrPort: getConfig('SSR_PORT', 8080),
            nodeEnv: getConfig('NODE_ENV'),
        })

        const Loadable = require('react-loadable') // eslint-disable-line
        await Loadable.preloadAll()

        // start services
        winston.verbose('[boot] start services...')
        await server.start({
            port: getConfig('SSR_PORT', 8080),
        })

        winston.verbose('[boot] complete!')
    } catch (err) {
        winston.error('===== BOOT ERROR ======')
        winston.error(err.message)
        winston.debug(err)
        console.log(err)
    }
}

module.exports = boot()
