import React, { useEffect, useState } from 'react'
function Interval(){
    const [count, setCount] = useState(0)

    const tick = () =>{
        setCount(count + 1)
    }

    useEffect(() =>{
        const interval = setInterval(tick, 1000)
        console.log(interval)
        return() => {
            clearInterval(interval)
        }
    },[count])

    return(
        <div>
            <h1>{count}</h1>
        </div>
    )
}

export default Interval