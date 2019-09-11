import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'

export default class Title extends React.Component {
    render () {
        if (this.props.type === 'h1') {
            return (
                <h1>{this.props.text}</h1>
            )
        } else if (this.props.type === 'h2') {
            return (
                <h2>{this.props.text}</h2>
            )
        } else if (this.props.type === 'h3') {
            return (
                <h3>{this.props.text}</h3>
            )
        } else if (this.props.type === 'h4') {
            return (
                <h4>{this.props.text}</h4>
            )
        }
        return (
            <h1>{this.props.text}</h1>
        )
    }
}

Title.propTypes = {
    text: PropTypes.string,
    type: PropTypes.string
}
