import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Nav.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [name, setName] = useState('');
  const [role,setRole] = useState(false);

  const token = localStorage.getItem('token');
  const userName = localStorage.getItem('name');
  const admin= localStorage.getItem('role')
  useEffect(() => {

    if (token && userName) {
      setIsAuthenticated(true);
      setName(userName);
    }
    if(admin == "admin"){
      setRole(true);
    }
    
  }, [admin,userName]);

  async function handleLogout() {
    try {
      const token = localStorage.getItem('token');
      if (!token) return;

      // Make the logout API request with the token
      const response = await axios.post(
        "http://127.0.0.1:8000/api/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`  // Attach token in the Authorization header
          }
        }
      );
  

      // Clear the token and name from localStorage
      localStorage.removeItem('token');
      localStorage.removeItem('name');
      localStorage.removeItem('role');
      localStorage.removeItem('id');
      
      // Reset authentication state
      setIsAuthenticated(false);
      setName('');

      // Redirect to login page
      navigate("/login");
      document.location.reload();

    } catch (error) {
      console.error("Logout Error:", error);
    }
  }

  return (
    <Navbar className='NavH' data-bs-theme="dark">
      <Container className='container'>
        <Navbar.Brand href='/' className='logo'>my<span className='R'>R</span>estaurant</Navbar.Brand>
        <Nav className={role ?'me-auto appoint':"me-auto nav"}>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/menu">Menu</Nav.Link>
          <Nav.Link href={!localStorage.getItem('name') ? "/login" :"/book"}>Book</Nav.Link>
          {role && <Nav.Link href="/appointments">Appointments</Nav.Link>}
          {!isAuthenticated && <Nav.Link href="/login">Login</Nav.Link>}
          {isAuthenticated && <Nav.Link href="/myappointments">Myappointment</Nav.Link>}
        </Nav>

        <span className='welcome-message' style={{color:'white'}}>Welcome, {name?name:"Guest"}</span>
        {isAuthenticated && (
          <>
            <button className='btn logout' onClick={handleLogout}>Logout</button>
          </>
        )}
      </Container>
    </Navbar>
  );
};

export default NavBar;
