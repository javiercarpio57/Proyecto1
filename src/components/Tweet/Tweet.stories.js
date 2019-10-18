import React from 'react'
// import { action } from '@storybook/addon-actions'
// import { Button } from '@storybook/react/demo'
import Tweet from './Tweet'

export default {
    title: 'Tweet'
}

export const empty = () => <Tweet text="Holaaa"/>

// export const emoji = () => (
//     <Button onClick={action('clicked')}>
//         <span role="img" aria-label="so cool">
//         😀 😎 👍 💯
//         </span>
//     </Button>
// )
