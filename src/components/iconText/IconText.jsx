import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'

export default class IconText extends React.Component {
    render () {
        var clase = "Text"

        if (this.props.selected === "true") {
            clase += " selected"
        }

        if (this.props.bold === "true") {
            clase += " bold"
        } else {
            clase += " normal"
        }

        return (
            <div className="div">
                <h2 className={"padding-left " + clase}>{this.props.text}</h2>
            </div>
        )
    }
}

IconText.propTypes = {
    text: PropTypes.string,
    selected: PropTypes.string,
    bold: PropTypes.string
}
