import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, number } from '@storybook/addon-knobs/react'
import Tweet from './Tweet'
import { withKnobs } from '@storybook/addon-knobs'

storiesOf('Tweet', module)
    .addDecorator(withKnobs)
    .add('Only text (dynamic)', () => {
        const tweetContent = text('Content', 'Holaaa')
        return (<Tweet text={tweetContent} />)
    }, {
        notes: 'This is a simple empty tweet.'
    })


const abuela = require("../../images/abuela.jpg")

storiesOf('Tweet', module)
    .addDecorator(withKnobs)
    .add('Text with profile picture', () => {
        const tweetContent = text('Content', 'Holaaa\nAmigo')
        return (<Tweet img={abuela} text={tweetContent} />)
    })

storiesOf('Tweet', module)
    .addDecorator(withKnobs)
    .add('Complete tweet', () => {
        const tweetContent = text('Content', 'Holaaa\nAmigo')
        const time = number('Time', 25)
        return (<Tweet img={abuela} name={"Mi Abuela Sabia"} user={"@miabuelasabia"}
            text={tweetContent} time={time + " min"} />)
    })
