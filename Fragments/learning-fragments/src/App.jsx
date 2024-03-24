
import React from 'react';
import './App.css'

function App() {

  let foodItems = ["Dal", "Pulses", "Vegetables", "Fruits"];


  return (
    // Fragments
    // <React.Fragment> 
    <>
    <div>Hello</div>
    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, explicabo.</div>
    <h1>Healthy Foods</h1>
    <ul>
      {foodItems.map((item) =>(
        <li>{item}</li>
      ))}
     
    </ul>
    
    
    </> 
    // </React.Fragment>
  );
 
}

export default App
