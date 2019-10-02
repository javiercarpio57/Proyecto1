import React from 'react'
import Title from './Title/Title.jsx'
import Image from './Image/Image.jsx'
import './style.scss'
import IconText from './iconText/IconText.jsx'
import Tweet from './Tweet/Tweet.jsx'
import Input from './Input/Input.jsx'
import TextField from './TextField/TextField.jsx'
import Tendencia from './Tendencia/Tendencia.jsx'
import Follow from './Follow/Follow.jsx'

const twitter = require("../images/twitter.svg")
const fran = require("../images/Fran.jpg")
const abi = require("../images/abi.jpg")
const inteligente = require("../images/inteligente.jpg")
const abuela = require("../images/abuela.jpg")
const carbon = require("../images/carbon.jpg")
const cinepolis = require("../images/cinepolis.jpg")

const Home = require("../images/wood-bird-house.svg")
const Explore = require("../images/hashtag.svg")
const Notifications = require("../images/notification.svg")
const Messages = require("../images/message-closed-envelope.svg")
const Booksmarks = require("../images/bookmark-white.svg")
const Lists = require("../images/note.svg")
const Profile = require("../images/Perfil.jpeg")
const More = require("../images/more-details-circular-button.svg")

const shining = require("../images/shining.svg")

const perfil = require("../images/Perfil.jpeg")

export default class App extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            tweets: [
                {
                    img: abi,
                    name: "Abigail Fernández Aguirre",
                    user: "@AbiPorEjemplo",
                    time: "15m",
                    text: "—¿Qué significa esto? —preguntó el aprendiz, al ver que tras una puerta aparecían otras tres.\n—Para encontrar la verdad debes recorrer varios caminos —explicó el maestro—. Primero, la curiosidad. Luego...\n—Mira, yo no tengo tiempo para esto. Necesito tener razón ya.",
                    comments: 1,
                    retweets: 6,
                    favs: 20
                },
                {
                    img: fran,
                    name: "Francisco MolinA*",
                    user: "@molinajimenez_",
                    time: "Sep 22",
                    text: "Me voy a volver evangelist de Quentin Tarantino, ahi me aguantan. Gracias por su preferencia 😇",
                    comments: 0,
                    retweets: 0,
                    favs: 2
                },
                {
                    img: inteligente,
                    name: "Eres Inteligente",
                    user: "@EresInteligente",
                    time: "1m",
                    text: "En Islandia no hay mosquitos.",
                    comments: 4,
                    retweets: 10,
                    favs: 44
                },
                {
                    img: abuela,
                    name: "Mi Abuela Sabia",
                    user: "@miabuelasabia",
                    time: "20m",
                    text: "No has aprendido nada de la vida si siempre piensas que tienes la razón",
                    comments: 2,
                    retweets: 294,
                    favs: 517
                },
                {
                    img: carbon,
                    name: "carbonvivo",
                    user: "@carbonvivo",
                    time: "Sep 23",
                    text: "Implementar más el “no quiero saber gracias” .",
                    comments: 50,
                    retweets: 600,
                    favs: 542
                },
                {
                    img: cinepolis,
                    name: "Cinépolis Guatemala",
                    user: "@CinepolisGT",
                    time: "3h",
                    text: "Hagamos un hilo con las razones del porqué ir a Cinépolis es un excelente plan para la primera cita.",
                    comments: 16,
                    retweets: 0,
                    favs: 10
                }
            ],
            tabs: [
                {
                    text: "Home",
                    path: Home,
                    selected: "true",
                    width: "1",
                    profile: "false"
                },
                {
                    text: "Explore",
                    path: Explore,
                    selected: "false",
                    profile: "false"
                },
                {
                    text: "Notifications",
                    path: Notifications,
                    selected: "false",
                    profile: "false"
                },
                {
                    text: "Messages",
                    path: Messages,
                    selected: "false",
                    profile: "false"
                },
                {
                    text: "Booksmarks",
                    path: Booksmarks,
                    selected: "false",
                    profile: "false"
                },
                {
                    text: "Lists",
                    path: Lists,
                    selected: "false",
                    profile: "false"
                },
                {
                    text: "Profile",
                    path: Profile,
                    selected: "false",
                    profile: "true"
                },
                {
                    text: "More",
                    path: More,
                    selected: "false",
                    profile: "false"
                }
            ]
        }
    }

    render () {
        const size = {
            widthSize: "28px"
        }

        return (
            <div className="columns content-justify">

                <div className="borderColumn1">
                    <div className="usingIcon sticky maxTop">
                        <Image twitter={"true"} source={twitter}/>

                        {
                            this.state.tabs.map((tab, index) => {
                                return (<div className="iconWithText" key={index}>
                                    <Image source = {tab.path} selected={tab.selected}
                                        width = {tab.width} profile = {tab.profile}/>
                                    <IconText bold={"false"} selected={tab.selected} text={tab.text}/>
                                </div>)
                            })
                        }

                        <button className="tweetBtn">
                            <Title type={"h3"} text={"Tweet"}/>
                        </button>
                    </div>
                </div>

                <div className="borderColumn2 rows">
                    <div className="add-padding align-vertically columns content-between up box header">
                        <Title text={"Home"} type={"h3"} />
                        <Image style={size} simple={"true"} source = {shining}/>
                    </div>

                    <Input img={perfil}/>
                    <div className="emptySpace" />

                    {
                        this.state.tweets.map((tweet, index) => {
                            return (
                                <Tweet key={"t" + index.toString()} img={tweet.img} name={tweet.name} user={tweet.user}
                                    time={tweet.time} text={tweet.text} comments={tweet.comments}
                                    retweets={tweet.retweets} favs={tweet.favs}/>
                            )
                        })
                    }
                </div>

                <div className="borderColumn3 rows">
                    <div className="column3Left">
                        <div className="input3">
                            <div className="textPad">
                                <TextField />
                            </div>
                        </div>
                        <Tendencia />
                        <Follow />
                    </div>
                </div>
            </div>
        )
    }
}
