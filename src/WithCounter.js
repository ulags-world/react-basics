import React , {useState} from "react";
const WithCounter = (OldComponent) =>{
    const NewComponent = () =>{
        const [count , setCount] = useState(0)
        const incrementCount = () => setCount(prevCount => prevCount + 1)
        console.log("no")
        return(
                <OldComponent 
                incrementCount = {incrementCount}
                count = {count}
                />
        )
    }
    return NewComponent
}

export default WithCounter;