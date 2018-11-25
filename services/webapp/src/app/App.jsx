import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { StyleRoot } from 'radium'

import { HomeScreen } from 'features/home-screen'

import styles from './App.style.js'

/**
 * Component
 */

const App = (props) => (
    <StyleRoot style={styles.wrapper}>
        <Helmet>
            <html lang="en" />
            <title>React App</title>
        </Helmet>
        <Switch>
            <Route path="/" exact component={HomeScreen} />
        </Switch>
    </StyleRoot>
)


/**
 *  Decorators & Exports
 */

export default App
