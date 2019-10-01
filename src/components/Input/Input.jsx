import React from 'react'
import PropTypes from 'prop-types'
import './Input.scss'
import TextareaAutosize from 'react-autosize-textarea'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const image = require("../../images/Image.svg")
const gif = require("../../images/Gif.svg")
const bar = require("../../images/Bar.svg")
const face = require("../../images/Face.svg")
const cross = require("../../images/cross.svg")

export default class Input extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            text: ""
        }

        this.setText = this.setText.bind(this)
    }

    setText () {
        this.setState({
            text: document.getElementById("TextareaAutosize").value
        })
    }

    render () {
        return (
            <div>
                <div className="row flex">
                    <div className="photoSpace boxSizing marginInput">
                        <img className="photo circle" src={this.props.img} />
                    </div>
                    <div className="column flex marginDiv boxSizing">
                        <div className="paddingBot">
                            <TextareaAutosize maxLength={280} id={"TextareaAutosize"} className="textArea" rows={2} placeholder="What's happening?" onChange={this.setText}/>
                        </div>
                        <div className="flex row between">
                            <div className="row flex">
                                <div className="marginRight">
                                    <img className="blue" src={image} />
                                </div>
                                <div className="marginRight">
                                    <img className="blue" src={gif} />
                                </div>
                                <div className="marginRight">
                                    <img className="blue" src={bar} />
                                </div>
                                <div className="marginRight">
                                    <img className="blue" src={face} />
                                </div>
                            </div>
                            <div className="flex row subir">
                                <CircularProgressbar className="progress" strokeWidth={10} value={this.state.text.length} minValue={0} maxValue={280}
                                    styles={buildStyles({
                                        pathColor: `rgb(29, 161, 242)`
                                    })} />
                                <div className="verticalLine" />
                                <div className="lineCircle">
                                    <img className="blue" src={cross} />
                                </div>
                                <div className="wBtn">
                                    <button className="buttonTweet">
                                        Tweet
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Input.propTypes = {
    img: PropTypes.string
}
