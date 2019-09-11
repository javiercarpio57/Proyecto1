import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'

export default class IconText extends React.Component {
    render () {
        return (
            <h2 className="gothamText">{this.props.text}</h2>
        )
    }
}

IconText.propTypes = {
    text: PropTypes.string
}
