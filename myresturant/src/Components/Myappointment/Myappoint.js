import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../Appointments/appointment.css'
import Button from 'react-bootstrap/Button';

const Myappoint = () => {
    const [appointments,setAppointments]=useState([])
  

  useEffect(()=>{
    axios
    .get(`http://127.0.0.1:8000/api/appointments/${localStorage.getItem('id')}`)
    .then(response=>setAppointments(response.data))
    .catch(error=>console.log(error))

  },[])
  function handelRemove(id){
    
      axios
      .delete(`http://127.0.0.1:8000/api/appointments/${id}`)
      .then(setAppointments(appointments.filter(appointments=>appointments.id !=id)))
      .catch(err=>console.log(err))
    
  }

  return (
   <>
      <div className='appointment'>
        <table className="table table-striped table-hover text-center">
          <thead className='table-danger'>
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>State</th>
              <th>Delete Appointment</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment.id}>
                <td>{appointment.name}</td>
                <td>{appointment.date}</td> 
                <td>{appointment.state}</td> 
                <td>
                <Button className='m-2' variant="warning" onClick={()=>handelRemove(appointment.id)}>Delete</Button>  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Myappoint
