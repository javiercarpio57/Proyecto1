import React from 'react'
import Title from './Title/Title.jsx'
import Image from './Image/Image.jsx'
import './style.scss'
import IconText from './iconText/IconText.jsx'
const path = require('path')

export default class App extends React.Component {
    render () {
        return (
            <div>
                <div className="column borderColumn1">
                    <div className="usingIcon">
                        <Image twitter={"true"} source={path.resolve("./src/images/twitter.svg")}/>
                        <div className="iconWithText">
                            <Image source={path.resolve("./src/images/wood-bird-house.svg")}/>
                            <IconText selected={"true"} text={"Home"}/>
                        </div>
                        <div className="iconWithText">
                            <Image source={path.resolve("./src/images/hashtag.svg")}/>
                            <IconText text={"Explore"}/>
                        </div>
                        <div className="iconWithText">
                            <Image source={path.resolve("./src/images/notification.svg")}/>
                            <IconText text={"Notifications"}/>
                        </div>
                        <div className="iconWithText">
                            <Image source={path.resolve("./src/images/message-closed-envelope.svg")}/>
                            <IconText text={"Messages"}/>
                        </div>
                        <div className="iconWithText">
                            <Image source={path.resolve("./src/images/bookmark-white.svg")}/>
                            <IconText text={"Bookmarks"}/>
                        </div>
                        <div className="iconWithText">
                            <Image source={path.resolve("./src/images/note.svg")}/>
                            <IconText text={"Lists"}/>
                        </div>
                        <div className="iconWithText">
                            <Image source={path.resolve("./src/images/twitter.svg")}/>
                            <IconText text={"Profile"}/>
                        </div>
                        <div className="iconWithText">
                            <Image source={path.resolve("./src/images/more-details-circular-button.svg")}/>
                            <IconText text={"More"}/>
                        </div>
                        <button className="tweetBtn">
                            <Title type={"h3"} text={"Tweet"}/>
                        </button>
                    </div>
                </div>
                <div className="column">
                    <Title text={"soy"}/>
                </div>
                <div className="column">
                    <Title text={"Javier"}/>
                </div>
            </div>
        )
    }
}
