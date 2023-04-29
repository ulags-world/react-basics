import React , {useState , useRef, useEffect} from "react";

function Ref(){
    const [name , setName] = useState('')
    const setFocus = useRef(1)

    // function focus(){
    //     setFocus.current.focus()
    // }
    useEffect(()=> {
        setFocus.current = setFocus.current + 1;
    })

    return (
        <div>
            <input 
            value={name}
            onChange={e => setName(e.target.value)}
            ref={setFocus}
            />
            {console.log(setFocus)}
            <h2>My name is {name}</h2>
            <button >focus</button>
            <h2>Rendered {setFocus.current} Times</h2>
        </div>
    )
}

export default Ref