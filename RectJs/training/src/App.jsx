// import React, { useState, useEffect } from 'react'
import UseState from "../src/components/UseState"
// import API from "../src/components/Api"
import Rooms from "../src/components/RoomsDetails"
import "./App.css"
import RoomsDetails from "../src/components/RoomsDetails"

const App = () => {
  // let [count, SetCount] = useState(0)
  // useEffect(() => {
  //   console.log("hii");
  // }, [state]);

  return (
    <>
      {/* <UseState /> */}
      {/* <API /> */}
      <RoomsDetails />
    </>
  )
}

export default App