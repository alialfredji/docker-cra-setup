
// Setup winston log level
const winston = require('winston')
winston.level = process.env.LOG_LEVEL || 'verbose'
winston.verbose('[boot] warming up...')

// // ES6 Compatibility (for client-side code)
// // (this is needed only for **SSR_ENABLED=yes**)
// // (you can comment it out if not using SSR for better memory footprint)
// require('ignore-styles')
// require('@babel/register')({
//     ignore: [
//         /\/(build|node_modules)\//,
//     ],
//     presets: [
//         [ '@babel/preset-env', {'targets': { 'node': 'current', 'browsers': [ 'last 2 versions', 'safari >= 7' ] }}], // eslint-disable-line
//         // 'react-app',
//         '@babel/preset-react',
//     ],
//     plugins: [
//         [ 'module-resolver', { root: ['./src'] } ],
//         '@babel/plugin-syntax-dynamic-import',
//         'babel-plugin-dynamic-import-node-babel-7',
//         'react-loadable/babel',
//         '@babel/plugin-proposal-class-properties',
//         [ '@babel/plugin-transform-runtime', {
//             regenerator: true,
//         } ],
//     ],
// })
// // <--> ES6 Compatibility (for client-side code)

// // SSR - Handle Images
// require('create-react-app-ssr/lib/create-ignore-styles').createIgnoreStyles()

// // Isomorphic Fetch
// require('es6-promise').polyfill()
// require('isomorphic-fetch')
// // <--> Isomorphic Fetch

// Boot the app
require('./boot')
