import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'

export default class Image extends React.Component {
    render () {
        var classname = "sizeImg"

        if (this.props.twitter) {
            classname += " color"
        }

        return (
            <img className={classname} src={this.props.source}/>
        )
    }
}

Image.propTypes = {
    source: PropTypes.string,
    twitter: PropTypes.string
}
