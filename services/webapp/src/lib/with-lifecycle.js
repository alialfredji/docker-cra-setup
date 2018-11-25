/**
 * Protects a component against authentication
 */

import React, { Component, createElement } from 'react'
import hoistStatics from 'hoist-non-react-statics'

const withLifecycle = (settings = {}) => {
    const withLifecycleHandler = (WrappedComponent) => {
        class WithLifecycle extends Component {
            componentWillMount () {
                settings.componentWillMount && settings.componentWillMount(this)
            }

            componentDidMount () {
                settings.componentDidMount && settings.componentDidMount(this)
            }

            componentWillReceiveProps (nextProps, nextState) {
                settings.componentWillReceiveProps && settings.componentWillReceiveProps(this, nextProps, nextState)
            }

            shouldComponentUpdate (nextProps, nextState) {
                return settings.shouldComponentUpdate
                    ? settings.shouldComponentUpdate(this, nextProps, nextState)
                    : true
            }

            componentDidUpdate (prevProps, prevState, snapshot) {
                settings.componentDidUpdate && settings.componentDidUpdate(this, prevProps, prevState, snapshot)
            }

            componentWillUnmount () {
                settings.componentWillUnmount && settings.componentWillUnmount(this)
            }

            componentDidCatch (error, info) {
                settings.componentDidUpdate && settings.componentDidUpdate(this, error, info)
            }

            render () {
                return createElement(WrappedComponent, {
                    ...this.props,
                })
            }
        }

        const HoistedWithLifecycle = hoistStatics(WithLifecycle, WrappedComponent)
        return HoistedWithLifecycle
    }

    return withLifecycleHandler
}

export default withLifecycle
