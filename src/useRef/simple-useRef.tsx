import React, { useRef, useState, useEffect } from "react";

export const Info = () => {
    
    const [state, setState] = useState('');
    const renderCount = useRef(1);

    useEffect(() => {
        renderCount.current = renderCount.current + 1
    })
    
    return(
        <div>
            <input value={state} onChange={(e)=>setState(e.target.value)}/>
            <div>{state}</div>
            <div>{renderCount.current}</div>
        </div>
    )
}