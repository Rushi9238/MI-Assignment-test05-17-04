import React, { createContext,useState } from 'react'
import './App.css';
import Login from './Component/Pages/Login';
import HomeGPS from './Component/Pages/HomeGPS';

import { Route, Routes } from 'react-router-dom'
import NextPage from './Component/Pages/NextPage';


export const GlobalData = createContext()

function App() {
  const [isLogin, setIsLogin] = useState(false)
  // const [data , setdata]=useState([])
  // useEffect(()=>{
  //   const fetchData=async()=>{
  //       const api=await fetch('http://localhost:3001/users')
  //       const res=await api.json()
  //       setdata(res)
  //   }
  //   fetchData()
  // },[])
  // console.log(isLogin);
  // console.log(data);

  return (
    <>
      <GlobalData.Provider value={{ isLogin, setIsLogin }}>
        <div className="App">
          <Routes>
          <Route path='/' element={isLogin ? <HomeGPS/> : <Login/>} >
          </Route>
          <Route path='/nextpage/:id' element={<NextPage/>}/> 
          
          </Routes>
        </div>
      </GlobalData.Provider>
    </>
  );
}

export default App;
