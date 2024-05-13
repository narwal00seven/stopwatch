import { useEffect, useState } from "react"

export default function Stopwatch(){
    const [timer,setTimer] = useState(0)
    const [ timeron,setTimerOn] = useState(false);
    const formatTimer = (sec) =>{
        const min = Math.floor(sec / 60);
        const remaingSeconds = sec % 60;
        return ` ${min}:${remaingSeconds < 10 ? "0" :""}${remaingSeconds}`;
    };

    const handleStart = (e) =>(
        setTimerOn(prevTimerState => !prevTimerState)
    )
    const handleReset = () =>{
        setTimer(0)
        setTimerOn(false)
    }
    useEffect(()=>{
        let timer;
        if(timeron){
            timer = setInterval(() => {
                setTimer((timer) => timer + 1)
            }, 1000) 
        } else {
            clearInterval(timer);
        }
        return () => clearInterval(timer);
    })

    return(
        <>
        <h1>Stopwatch</h1>
        <p>Time: {formatTimer(timer)}</p>
        <button onClick={handleStart}>{timeron ? "Stop" : "Start"}</button>
        <button onClick={handleReset}>Reset</button>
        </>
    )
}