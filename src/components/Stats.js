import React from 'react'

const Stats = props => {
    return(
        <ul>
        <li class={props.hotcold}>{props.temperature}</li>
        <li>{props.description}</li>
        <li>{props.maxtemp}</li>
        <li>{props.mintemp}</li>
      </ul>
    )
}

export default Stats