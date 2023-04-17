import React, { createContext, useContext, useEffect, useState } from 'react'
import './App.css';
import Login from './Component/Pages/Login';
import HomeGPS from './Component/Pages/HomeGPS';

import { Route, Routes } from 'react-router-dom'


export const GlobalData = createContext()

function App() {
  const [isLogin, setIsLogin] = useState(false)
  const [data , setdata]=useState([])
  useEffect(()=>{
    const fetchData=async()=>{
        const api=await fetch('http://localhost:3001/users')
        const res=await api.json()
        setdata(res)
    }
    fetchData()
  },[])
  console.log(isLogin);
  console.log(data);

  return (
    <>
      <GlobalData.Provider value={{ isLogin, setIsLogin,data }}>
        <div className="App">
          <Routes>
          <Route path='/' element={isLogin ? <HomeGPS/> : <Login/>} />
          </Routes>
        </div>
      </GlobalData.Provider>
    </>
  );
}

export default App;
