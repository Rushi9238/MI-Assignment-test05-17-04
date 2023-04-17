import React from 'react'
import { useParams } from 'react-router-dom'
import '../../CSS_files/HomeGPS.css'
import { data } from '../Const-Files/data'

const NextPage = () => {
    const {id}=useParams()
    // console.log(id);
    const heading=data.find((ele)=>{
        return ele.DeviceId===id
    })
    // console.log(my);
  return (
    <div className='nextpage'>
        
          <div>
          <h1>{heading.DeviceId}</h1> 
          <h2>{heading.DeviceType}</h2>
          </div>
        
        <div className="tabel-div">
        <table  style={{ width: '100%',height:'100%' }}>
            <tbody>
            <tr>
            
           
            <th>Timestamp</th>
            <th>Location</th>
          </tr>
        {data.map((ele)=>{
            if(id===ele.DeviceId){
                return  <tr key={ele.id} style={{ textAlign: 'center' }}>
                
               
                <td>{ele.Timestamp}</td>
                <td>{ele.location}</td>
                </tr>
            }
            return null
        })}
            </tbody>
         </table>
        </div>
    </div>
  )
}

export default NextPage