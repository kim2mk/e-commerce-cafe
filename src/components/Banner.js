import React from 'react';
import './Banner.css';
import banner1 from '../assets/banner1.png';
import { useNavigate } from "react-router-dom";

const Banner = () => {

  const navigate = useNavigate();

  return (
    <div className='hero-banner-container'>
      <div>
        <h3 className='coffee'>Cafe for all your caffeine needs</h3>
        <h1 className='coffee-title'>Cafe Coffee</h1>
        <img src={banner1} alt='coffee'
        className='hero-banner-image'/>
      <div>
        <button type="button" button onClick={() => navigate("/shop")}>Order Now</button>
        <div className='desc'>
          <h5>Fresh Coffee Beans</h5>
          <p>Locally sourced beans for great taste</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Banner;