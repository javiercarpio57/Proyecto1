import React from 'react'
import './Follow.scss'

const minifixion = require("../../images/minifixion.jpg")
const vastago = require("../../images/vastago.jpg")
const viaje = require("../../images/viaje.jpg")

export default class Tendencia extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            posibleFollowers: [
                {
                    img: minifixion,
                    name: "minifixion",
                    user: "@minifixion"
                },
                {
                    img: vastago,
                    name: "Vastago.com",
                    user: "@vastagomusic"
                },
                {
                    img: viaje,
                    name: "Viaja En El Mundo",
                    user: "@ViajaEnElMundo"
                }
            ]
        }
    }

    render () {
        return (
            <div className="flex filas hashBack">
                <div className="head t">
                    <span className="spaceSpan">Who to follow</span>
                </div>
                {
                    this.state.posibleFollowers.map((u, index) => {
                        return (
                            <div className="t pad hover row flex" key={index}>
                                <div className="profileSize boxSizing marginPhoto">
                                    <img className="photoS circle" src={u.img} />
                                </div>
                                <div className="flex column">
                                    <span className="nameFollow">{u.name}</span>
                                    <span className="grayLetter userFont">{u.user}</span>
                                </div>
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
