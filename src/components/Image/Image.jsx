import React from 'react'
import PropTypes from 'prop-types'
import './image.scss'

export default class Image extends React.Component {
    render () {
        if (this.props.simple === "true") {
            return (
                <img className="img2" src={this.props.source}/>
            )
        }

        if (this.props.profile === "true") {
            const style = {
                display: "flex",
                width: "32px",
                alignItems: "center"
            }
            return (
                <div style={style}>
                    <img className="profile" src={this.props.source}/>
                </div>
            )
        }

        var classname = "img"

        if (this.props.twitter === "true") {
            classname += " Twitter color"

            return (
                <div>
                    <img className={classname} src={this.props.source}/>
                </div>
            )
        }

        if (this.props.selected === "true") {
            classname += " color"
        }

        return (
            <div className="div">
                <img className={classname} src={this.props.source}/>
            </div>
        )
    }
}

Image.propTypes = {
    source: PropTypes.string,
    twitter: PropTypes.string,
    selected: PropTypes.string,
    simple: PropTypes.string,
    profile: PropTypes.string
}
