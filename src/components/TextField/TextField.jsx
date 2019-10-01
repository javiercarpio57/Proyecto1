import React from 'react'
import './TextField.scss'

const lupa = require("../../images/Lupa.svg")

export default class Title extends React.Component {
    render () {
        return (
            <div className="divInput">
                <div className="lupa">
                    <img src={lupa}/>
                </div>
                <input placeholder="Search Twitter" />
            </div>
        )
    }
}
