/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const form = () => {
  let [data, SetData] = useState({
    name: "",
    email: "",
    password: ""
  })



  function fun1(e) {
    let { name, value } = e.target
    SetData({ ...data, [name]: value })
    console.log(data);

  }
  return (
    <div>
      <input type="text" onChange={fun1} name='name' value={data.name} />
      <br />
      <input type="email" onChange={fun1} name='email' value={data.email} />
      <br />
      <input type="password" onChange={fun1} name='password' value={data.password} />
      <br />

      <><h1>{data.name}</h1><h1>{data.email}</h1><h1>{data.password}</h1></>

      <Link to={'/Login'}>
        <button>Login</button>
      </Link>
    </div>
  )
}

export default form