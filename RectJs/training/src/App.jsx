// import React, { useState, useEffect } from 'react'
import API from "../src/components/Api"
import "./App.css"

const App = () => {
  // let [count, SetCount] = useState(0)
  // let [color, SetColor] = useState("red")
  // let [state, SetState] = useState("Delhi")
  // useEffect(() => {
  //   console.log("hii");
  // }, [state]);

  

  
  return (
    <>
    {/* <div>
      <h1>{count}</h1>
      <h1>{state}</h1>
      <h1>{color}</h1>
      <button onClick={()=>SetCount(count+1)}>click</button>
      <button onClick={()=>SetColor("yellow")}>color</button>
      </div> */}
      <API />
      </>
  )
}

export default App