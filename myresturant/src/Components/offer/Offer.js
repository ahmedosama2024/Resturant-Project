import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import pizza from './img/pizza.png';
import offer1 from './img/fast-food-burger-pizza-best-combo-offer-social-media-banner-post-design-template_591663-52.avif';
import offer2 from './img/Italian-Appetizers-Horizontal-RU-Collage.webp';
import './offer.css'

function Offer() {
  return (
    <div className='offer'>
    <Carousel>
      <Carousel.Item>
        <img src={pizza} alt='pizza'/>
      </Carousel.Item>
      <Carousel.Item>
      <img src={offer1} alt='offer1'/>
      </Carousel.Item>
      <Carousel.Item>
      <img src={offer2} alt='offer2'/>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Offer;
