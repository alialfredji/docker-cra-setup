// const path = require('path')

//const MobilePageComponentWrapper = require('../../../styleguide/lib/StyleGuidist.wrapper').default

// const mobilePageComponents = [
//     'Button',
//     'Input',
//     'LoadingIndicator',
//     'SelectList',
//     'TextArea',
// ]

module.exports = {
    components: [
        // './src/components/RadiumLink/*.jsx',
        // ...mobilePageComponents.map(compName => `./src/layouts/MobilePage/lib/${compName}.jsx`),
        // '**/components/**/*.{jsx}',
        // './src/layouts/**/*.jsx',
    ],
    // styleguideComponents: {
    //     Wrapper: path.join(__dirname, 'src/styleguide/lib/StyleGuidist.wrapper'),
    // },
    context: {
        // Wrapper: path.join(__dirname, 'src/styleguide/lib/StyleGuidist.wrappers'),
    },
    // ],
    // ignore: [
    //     // Default config
    //     '**/__tests__/**',
    //     '**/*.test.{js,jsx,ts,tsx}',
    //     '**/*.spec.{js,jsx,ts,tsx}',
    //     '**/*.d.ts',
    //     // Unruly components
    //     '**/components/Date/**',
    //     '**/components/PgDate.*',
    //     // Style stuff
    //     '**/components/*.style.js',
    //     '**/components/*/*.style.js',
    //     // Indexes
    //     '**/components/index.js',
    //     '**/components/*/index.js',
    // ],
}
