import React, { useEffect, useRef, useState } from "react";

export const MutableRef = () => {
    const [timer, setTimer] = useState(0)
    const intervalRef = useRef<number | null>(null);

    const Reset = () => {
        // console.log(intervalRef.current);
    }
    function stopTimer(){
        if(intervalRef.current) window.clearInterval(intervalRef.current)
    }
    const Start = ()=> {
        // for (var i=0; i < numrows; i++) {
        //     <ObjectRow/>
        // }
        intervalRef.current = window.setInterval(()=>{
            setTimer((timer) => timer+1)
        }, 1000)
    }

    
    // useEffect(()=>{
       
    //     return () => {
    //         stopTimer()
    //     }
    // }, [])
    

    return(
        <div>
            Hook Timer {timer}
            <button onClick={() => stopTimer()}>Stop Timer</button>
            <button onClick={Start}>Start</button>
            <button onClick={Reset}>Reset</button>
        </div>
    )
}