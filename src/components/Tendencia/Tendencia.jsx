import React from 'react'
import './Tendencia.scss'

const settings = require("../../images/Settings.svg")

export default class Tendencia extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            trend: [
                {
                    place: "Guatemala",
                    trend: "Alejandro Giammattei",
                    tweets: ""
                },
                {
                    place: "Guatemala",
                    trend: "Porsche",
                    tweets: "11.1K"
                },
                {
                    place: "Guatemala",
                    trend: "Maluma",
                    tweets: "14.4K"
                },
                {
                    place: "Guatemala",
                    trend: "Jimmy Morales",
                    tweets: ""
                },
                {
                    place: "Guatemala",
                    trend: "Estado de Sitio",
                    tweets: "1,163"
                }
            ]
        }
    }

    render () {
        return (
            <div className="flex filas hashBack">
                <div className="head t">
                    <span className="spaceSpan">Trends for you</span>
                    <img className="blue settings" src={settings} />
                </div>
                {
                    this.state.trend.map((t, index) => {
                        return (
                            <div className="t pad hover" key={index}>
                                <div className="place grayLetter">
                                    <span>
                                        {"Trending in " + t.place}
                                    </span>
                                </div>
                                <div className="trend">
                                    <span id="trend">
                                        {t.trend}
                                    </span>
                                </div>
                                {t.tweets !== "" ?
                                    <div className="trend grayLetter TweetFont">
                                        <span>
                                            {t.tweets + " Tweets"}
                                        </span>
                                    </div> :
                                    <div />
                                }
                            </div>
                        )
                    })
                }
                <div className="showMore hover">
                    <span>Show more</span>
                </div>
            </div>
        )
    }
}
