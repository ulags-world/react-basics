import React , {useState , useEffect} from 'react'

export default function Counter() {
    const [count , setCount] = useState(0);
    
    function handleClick(){
        return (setCount(count+1))
    }
    useEffect(()=>{
        setInterval(() => {
            setCount(count+1)
        }, 1000);
    } , [count])
  return (
    <div>
        <button onClick={handleClick}>
         you clicked {count}times
        </button>
    </div>
  )
}
