import React, { useContext } from 'react'
import { GlobalData } from '../../App'

const HomeGPS = () => {
  const{data}=useContext(GlobalData)

  return (
    <div>
      {data.map((ele)=>{
        return <div key={ele.id}>
        <p>{ele.DeviceType}</p>
        </div>
        console.log(ele.DeviceType);
      })}
    </div>
  )
}

export default HomeGPS