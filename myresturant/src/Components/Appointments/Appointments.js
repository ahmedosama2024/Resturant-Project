import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './appointment.css'
import Button from 'react-bootstrap/Button';


const Appointments = () => {
  const [appointments,setAppointments]=useState([])
  

  useEffect(()=>{
    axios
    .get("http://127.0.0.1:8000/api/appointments")
    .then(response=>setAppointments(response.data))
    .catch(error=>console.log(error))

  },[])
  function handelRemove(id){
    
      axios
      .delete(`http://127.0.0.1:8000/api/appointments/${id}`)
      .then(setAppointments(appointments.filter(appointments=>appointments.id !=id)))
      .catch(err=>console.log(err))
    
  }
  function handelAccept(id){
    
      axios
      .put(`http://127.0.0.1:8000/api/appointments/${id}`,
        {
            state: "Accepted"
        }
      )
      .then(() => {
        setAppointments(appointments.map((appointment) =>
          appointment.id === id ? { ...appointment, state: 'Accepted' } : appointment
        ))})
      .catch(err=>console.log(err))
    
  }
  function handelRefuse(id){
    
      axios
      .put(`http://127.0.0.1:8000/api/appointments/${id}`,
        {
            state: 'Refused'
        }
      )
      .then(() => {
        setAppointments(appointments.map((appointment) =>
          appointment.id === id ? { ...appointment, state: 'Refused' } : appointment
        ))})
      .catch(err=>console.log(err))
    
  }
  return (
<>
      <div className='appointment'>
        <table className="table table-striped table-hover text-center">
          <thead className='table-danger'>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Date</th>
              <th>State</th>
              <th>User_id</th>
              <th>Confirmation</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment.id}>
                <td>{appointment.id}</td>
                <td>{appointment.name}</td>
                <td>{appointment.date}</td> 
                <td>{appointment.state}</td> 
                <td>{appointment.user_id}</td> 
                <td>
                  <Button className='m-2' variant="danger" onClick={()=>handelAccept(appointment.id)}>Accepted</Button>
                  <Button className='m-2' variant="primary" onClick={()=>handelRefuse(appointment.id)}>Refused</Button>
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

export default Appointments
