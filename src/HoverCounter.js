import React from "react";
import WithCounter from './WithCounter'

const HoverCounter = ({count , incrementCount}) =>{
    return (
        <>
        <button onMouseOver={incrementCount}>
            you hovered {count} times
        </button>
        </>
    )
}

export default WithCounter(HoverCounter)