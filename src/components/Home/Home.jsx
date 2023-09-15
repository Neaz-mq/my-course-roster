/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';

import "./Home.css";
import { useState } from "react";
import Cart from './Cart/Cart';

const Home = () => {
  const [allCourses, setAllCourses] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);

  useEffect(() =>{
    fetch("./data.json")
     .then((res) => res.json())
      .then((data) => setAllCourses(data));
  }, []);
  return (
    
    <div className="container">
      <div>
        <h1>Course Registration</h1>
      </div>
      <div className="home-container">
        <div className="card-container">
          {allCourses.map((course) => (
            <div key={course.id} className="card">
              <div className="card-img">
                <img className="photo" src={course.image} alt="" />
              </div>
              <h2>{course.name}</h2>
              <p>
                <small>
                 { course.description}
                </small>
              </p>
              <div className="info">
                <p className='price'>$ Price: {course.price} </p>
                <p> Credit: {course.credit}hr</p>
              </div>
              <button
                // onClick={() => handleSelectActor(actor)}
                className="card-btn"
              >
                Select
              </button>
            </div>
          ))}
        </div>
        <div className='cart'>
        
        <Cart></Cart>
        </div>
        
      </div>
    </div>
  );
};

export default Home;