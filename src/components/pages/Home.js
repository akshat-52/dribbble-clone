import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
     const navigate = useNavigate();

     const handleButtonClick = () => {
          navigate('/login');
     }

     return (
          <div className="page1">
               <h1>The world’s destination for design</h1>
               <p>Get inspired by the work of millions of top-rated designers & agencies around the world.</p>
               <div className="custom-button-container">
                    <button className="custom-button" onClick={handleButtonClick}>
                         Get Started
                    </button>
               </div>
          </div>
     )
}
