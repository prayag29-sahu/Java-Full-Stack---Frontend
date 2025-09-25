import React from 'react'
import { useState } from 'react'
const UseState = () => {
    let [count, SetCount] = useState(0)
    let [color, SetColor] = useState("red")
    let [state, SetState] = useState("Delhi")
    return (
        <div>
            <div>
                <h1>{count}</h1>
                <h1>{state}</h1>
                <h1>{color}</h1>
                <button onClick={() => SetCount(count + 1)}>click</button>
                <button onClick={() => SetColor("yellow")}>color</button>
            </div>
        </div>
    )
}

export default UseState