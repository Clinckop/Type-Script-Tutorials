import React, { useEffect, useRef, useState } from "react";

export const InputEL = () => {

    const inputRef = useRef<HTMLInputElement>(null!);
    
    useEffect(() => {
        inputRef.current.focus()
    })
    return(
        <div>
            <input ref={inputRef} type='text'/>
        </div>
    )
}