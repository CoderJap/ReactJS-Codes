
import React from 'react';
import './App.css'

function App() {

   let foodItems = ["Dal", "Pulses", "Vegetables", "Fruits"];
  // let foodItems = [];


  return (
    // Fragments
    // <React.Fragment> 
    <>
    <h1>Healthy Foods</h1>
    {foodItems.length === 0 ?<h3>I am Hungry</h3>: null}
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
