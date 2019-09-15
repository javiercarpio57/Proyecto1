import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'

export default class IconText extends React.Component {
    render () {
        var clase = "gothamText"

        if (this.props.selected) {
            clase += " selected"
        }

        return (
            <h2 className={clase}>{this.props.text}</h2>
        )
    }
}

IconText.propTypes = {
    text: PropTypes.string,
    selected: PropTypes.string
}
