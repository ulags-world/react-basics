import { useState } from 'react';

function useToggle(){
    const [state , setState] = useState(false)
    const handleClick = () => {
        setState(!state)
    };
    return [state , handleClick]
}
export default useToggle;