/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import "./Home.css";
import { useState } from "react";
import Cart from './Cart/Cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const [allCourses, setAllCourses] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [totalCredit, setTotalCredit] = useState(0);
  const [remaining, setRemaining] = useState(20);


  useEffect(() =>{
    fetch("./data.json")
     .then((res) => res.json())
      .then((data) => setAllCourses(data));
  }, []);

  const handleSelectCourse = (course) => {
    const isExist = selectedCourses.find((item) => item.id == course.id);
  
    let credit = course.credit;

    if (isExist) { 
      toast.error("You already booked this course!" , {
        position: "top-center",
        autoClose: 3500,
      });
    } else {
      selectedCourses.forEach((item) => {
        credit = credit + item.credit;
      });
      const remaining = 20 - credit;
        if (credit > 20) {

          toast.warn("You can not add more than 20 credit !" , {
            position: "top-center"
          });
          
       } else {
      setTotalCredit(credit);
      setSelectedCourses([...selectedCourses, course]);
      setRemaining(remaining);
  }
}
};


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
                 onClick={() => handleSelectCourse(course)}
                className="card-btn"
              >
                Select
              </button>
              <ToastContainer />
            </div>
          ))}
        </div>
        <div className='cart'>
        
        <Cart
        selectedCourses={selectedCourses}
        totalCredit={totalCredit}
        remaining={remaining}
        
        ></Cart>
        </div>
        
      </div>
    </div>
  );
};

export default Home;