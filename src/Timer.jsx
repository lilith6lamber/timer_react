import {useState, useEffect, useRef} from "react";

function setDefaultValue() {
    const userData = localStorage.getItem('count');
    return userData ? +userData : 0
}

function Timer() {
    const [count, setCount] = useState(setDefaultValue);
    const [isActive, setStatus] = useState(false);
    const timerRef = useRef(null);

    function start() {
        setStatus(true);
    }

    function pause() {
        setStatus(false);
    }

    function reset() {
        setCount(0);
        setStatus(false);
        clearInterval(timerRef.current)
    }

    // update
    useEffect(() => {
        localStorage.setItem('count', count)
    }, [count])

    useEffect(() => {
        if (isActive) {
            timerRef.current = setInterval(() => {
                setCount((prev) => prev + 1)
            }, 1000)
        }
        return () => {
            timerRef.current && clearInterval(timerRef.current);
            timerRef.current = null;
        }
    }, [isActive])

    return (
        <div className='container'>
            <div className='timer'>
                <span className='timer_count'>{count}</span>
                <div className="timer_controls">
                    {isActive ? <button className='pause' onClick={pause}>Pause</button> :
                        <button className='start' onClick={start}>Start</button>}
                    <button className='reset' onClick={reset}>Reset</button>
                </div>
            </div>
        </div>
    )
}

export default Timer;