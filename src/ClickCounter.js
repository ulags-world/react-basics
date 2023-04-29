import React from "react";
import WithCounter from './WithCounter'

const ClickCounter = ({count , incrementCount}) => {
    return(
        <>
        <button onClick={incrementCount}>
            you clicked{count}times
        </button>
        </>
    )
}
export default WithCounter(ClickCounter)