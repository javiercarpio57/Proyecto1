import React from 'react'
import { storiesOf } from '@storybook/react'
// import { text, number } from '@storybook/addon-knobs/react'
import { withKnobs } from '@storybook/addon-knobs'
import Input from './Input'

const perfil = require("../../images/Perfil.jpeg")

storiesOf('Tweet Input', module)
    .addDecorator(withKnobs)
    .add('Default', () => {
        return (<Input />)
    }, {
        notes: 'This is a default input. Could see weird if its a dark theme.'
    })

storiesOf('Tweet Input', module)
    .addDecorator(withKnobs)
    .add('Input with profile picture', () => {
        return (<Input img={perfil} />)
    })
