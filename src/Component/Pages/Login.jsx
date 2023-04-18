import React, { useContext, useState } from 'react'
import '../../CSS_files/Login.css'
import { GlobalData } from '../../App'

const Login = () => {
  const { setIsLogin } = useContext(GlobalData);
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const handelLogIn = () => {
    if((userName === "Rushi" && password === "rushi@123") || (userName === "Admin" && password === "admin@123")){

      setIsLogin(true)
    }
    else{
     
      alert("Fill proper credential..!")
    }
    setPassword('')
    setUserName('')
  }
  return (
    <>
      <div className="login-div">
        <div className="ld-container">
          <h1>Login page</h1>
          <div className="username">
            <label>Username</label>
            <input type="text" name="" id="" value={userName} onChange={(e) => { setUserName(e.target.value) }} />

          </div>
          <div className="password">
            <label>Password</label>
            <input type="password" name="" id="" value={password} onChange={(e) => { setPassword(e.target.value) }} />

          </div>
          <button onClick={handelLogIn}>LogIn</button>
          <p>New User?</p>
        </div>
      </div>
    </>
  )
}

export default Login