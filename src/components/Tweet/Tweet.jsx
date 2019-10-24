import React from 'react'
import PropTypes from 'prop-types'
import './tweet.scss'

const conversation = require("../../images/conversation.svg")
const retweet = require("../../images/Retweet.svg")
const fav = require("../../images/Fav.svg")

export default class Tweet extends React.Component {
    render () {
        return (
            <div>
                <div className="row flex tweet">
                    <div className="photoSpace boxSizing margin">
                        <img className="photo circle" src={this.props.img} />
                    </div>
                    <div className="column">
                        <div className="flex paddingBottom margin row boxSizing content">
                            <div>
                                <span id="name">{this.props.name}</span>
                            </div>
                            <div className="username gray">
                                <span>{this.props.user}</span>
                            </div>
                            <div className="gray paddingSides">
                                <span className="dot">.</span>
                            </div>
                            <span className="gray">{this.props.time}</span>
                        </div>
                        <div className="margin boxSizing">
                            {this.props.text.split("\n").map(function (item, num) {
                                return (
                                    <span key={num} id="text">
                                        {item}
                                        <br/>
                                    </span>
                                )
                            })}
                        </div>
                        <div className="data row flex">
                            <div className="flex dataBox boxSizing comment">
                                <div className="iconBox circle">
                                    <img className="icons" src={conversation} />
                                </div>
                                {this.props.comments > 0 ? <span className="gray number">
                                    {this.props.comments}</span> : <span />}
                            </div>
                            <div className="flex boxSizing dataBox retweet">
                                <div className="iconBox">
                                    <img className="icons" src={retweet} />
                                </div>
                                {this.props.retweets > 0 ? <span className="gray number">
                                    {this.props.retweets}</span> : <span />}
                            </div>
                            <div className="flex boxSizing dataBox fav">
                                <div className="iconBox">
                                    <img className="icons" src={fav} />
                                </div>
                                {this.props.favs > 0 ? <span className="gray number">
                                    {this.props.favs}</span> : <span />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Tweet.propTypes = {
    img: PropTypes.string,
    name: PropTypes.string,
    user: PropTypes.string,
    time: PropTypes.string,
    text: PropTypes.string,
    comments: PropTypes.number,
    retweets: PropTypes.number,
    favs: PropTypes.number
}
