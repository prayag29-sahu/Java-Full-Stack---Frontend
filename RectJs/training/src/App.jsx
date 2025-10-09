// // import React, { useState, useEffect } from 'react'
// import UseState from "../src/components/UseState"
// // import API from "../src/components/Api"
// import Rooms from "../src/components/RoomsDetails"
// import "./App.css"
// import RoomsDetails from "../src/components/RoomsDetails"
// import Form from "./components/form"



// const App = () => {
//   // let [count, SetCount] = useState(0)
//   // useEffect(() => {
//   //   console.log("hii");
//   // }, [state]);

//   return (
//     <>
//       {/* <UseState /> */}
//       {/* <API /> */}
//       {/* <RoomsDetails /> */}
//       <Form />
//     </>
//   )
// }

// export default App
import React from 'react';
import Form from "./components/form";
import Signup from "./components/Signup";import Login from "./components/Login";
import { Routes, Route } from 'react-router-dom';
import Search from "./components/search"

const App = () => {
  return (
    <div>
      {/* <Routes>
        <Route path='/' element={<Form />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Routes> */}
      <Search />
    </div>
  );
}

export default App;
