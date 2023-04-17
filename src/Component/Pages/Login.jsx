import React, { useContext } from 'react'
import '../../CSS_files/Login.css'
import { GlobalData } from '../../App'

const Login = () => {
  const{setIsLogin} =useContext(GlobalData);

  const handelLogIn=()=>{
    setIsLogin(true)
  }
  return (
    <>
    <div className="login-div">
        <div className="ld-container">
          <h1>Login page</h1>
        <div className="username">
            <label>Username</label>
            <input type="text" name="" id="" />

        </div>
        <div className="password">
            <label>Password</label>
            <input type="password" name="" id="" />

        </div>
        <button onClick={handelLogIn}>LogIn</button>
        <p>New User?</p>
        </div>
    </div>
    </>
  )
}

export default Login