import React, { useState } from "react";

function HookCount(){
    const [count, setCount] = useState(0)
    return(
        <>
            <div>{count}</div>
            <button onClick={() => setCount(count + 1)}>Count {count}</button>
        </>
     
    )
        
    
}

export default HookCount