import React from 'react'
// import { GlobalData } from '../../App'
import { data } from '../Const-Files/data'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import '../../CSS_files/HomeGPS.css'
import { Link } from 'react-router-dom';

const HomeGPS = () => {
  // const{data}=useContext(GlobalData)
  // const f1=data.filter((ele)=>{
  //   return ele

  // })

 
  // [...new Map(data.map((item) => [item.DeviceId, item])).values()]

  //   const unique = data
  //   .map((item) => item.DeviceId)
  //   .filter((value, index, self) => self.indexOf(value) === index);


  // data.map((ele,val)=>{
  //   if(ele.DeviceId == unique[val]){
  //     console.log(ele);
  //   }
  // })
    
  return (
    <div className='home'>
      <h1>GPS summary</h1>
      <input type="text" className="input-box" id="" placeholder='Search DeviceId/type ' />
      <table className='home-table' style={{ width: '100%',height:'70%' }}>
        <tbody >
          <tr>
            <th>DeviceId</th>
            <th>DeviceType</th>
            <th>Timestamp</th>
            <th>Location</th>
            <th></th>
          </tr>

          {[...new Map(data.map((item) => [item.DeviceId, item])).values()].map((ele) => {
            return <tr key={ele.id} style={{ textAlign: 'center' }}>
            <td>{ele.DeviceId}</td> 
            <td>{ele.DeviceType}</td>
            <td>{ele.Timestamp}</td>
            <td>{ele.location}</td>
            <td>
            <Link to={`/nextpage/${ele.DeviceId}`}>
            <ArrowRightAltIcon className='rightArrow' fontSize="large" /> 
            
            </Link>
            </td>
          </tr>
          })}

        </tbody>
      </table>
    </div>
  )
}

export default HomeGPS