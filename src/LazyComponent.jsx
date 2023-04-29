import React, { Suspense } from 'react'

const LazyComponentFetch = React.lazy(() => import('./LazyComponentFetch'))

const LazyComponent = () => {
    return(
        <div>
        <Suspense 
            fallback={<div>{"Loading..."}</div>}
        />
        <LazyComponentFetch /> 
        
        </div>
    )
}
export default LazyComponent;
