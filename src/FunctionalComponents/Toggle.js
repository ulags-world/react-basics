import React  from 'react'
import useToggle  from './Hooks/useToggle'
import './Toggle.css'
function Toggle() {
    const [isHappy , isHappyFunction] = useToggle()
    const [isHappy1 , isHappyFunction1] = useToggle()
    return(
    <div>
      <button className='head' onClick={isHappyFunction}>{isHappy ? "😆" : "😂"}</button>
      <button className='head' onClick={isHappyFunction1}>{isHappy1 ? "😜" : "🙂"}</button>
    </div>
  )
}

export default Toggle
