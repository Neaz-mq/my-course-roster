/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Cart.css";

const Cart = ({ selectedCourses, totalCredit, remaining}) => {

  console.log(selectedCourses);
  

  return (
    <div className="cart-container">
      <h3>Credit Hour Remaining {remaining} hr </h3>
      <h2>Course Name  </h2>
      <ul>
      {selectedCourses.map((course,index) => (
      
      
        <li key={course.id}>{index + 1}    {course.name}</li>
        
      ))}
      </ul>
      <p>Total Credit Hour: {totalCredit}</p>
      <p>Total Price : 48000 USD</p>
    </div>
  );
};

export default Cart;
