import React from 'react'
import { connect } from 'react-redux'

const mapState = (state) => {
    return {}
}

const mapDispatch = () => ({})

const HomeScreen = () => {
    return (
        <div>
            <p>Hello world</p>
            <p>Image: </p>
            <img
                src={'https://scontent-arn2-1.cdninstagram.com/vp/134b7290ed67a0670a89f5f12d5df65e/5CA50B3C/t51.2885-15/e15/10831724_348317782040948_1401706528_n.jpg'}
                alt={'pic'}
                width={200}
            />
        </div>
    )
}

export default connect(mapState, mapDispatch)(HomeScreen)

