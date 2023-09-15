/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Cart.css";

const Cart = ({ selectedCourses}) => {

  console.log(selectedCourses);
  

  return (
    <div className="cart-container">
      <h3>Credit Hour Remaining: </h3>
      <h2>Course Name : </h2>
      {selectedCourses.map((course) => (
       
        <li key={course.id}>{course.name}</li>
     
      ))}
      <p>Total Credit Hour:</p>
    </div>
  );
};

export default Cart;
