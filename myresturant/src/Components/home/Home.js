import React from 'react';
import Button from 'react-bootstrap/Button';
import './home.css'
import { Link } from 'react-router-dom';
import Offer from '../offer/Offer';


const Home = () => {
  return (
    <>
        <header className='home'>
            <h2>Better Ingrediance For Better Taste</h2>
            <Button className='btn'><Link to='/menu' className='link'>Order Now 😉</Link></Button>
        <div className='openning'>
            <h2>Open From 10 AM to 1 AM</h2>
        </div>
        </header>
        <Offer/>
    </>
  )
}

export default Home
