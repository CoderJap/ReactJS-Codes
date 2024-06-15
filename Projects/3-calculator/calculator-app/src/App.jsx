import styles from "./App.module.css";
import Display from "./components/display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";

function App(){

  const [calVal , setCalVal]= useState("");

  const onButtonClick = (buttonText) =>{
    if(buttonText === 'C'){
      setCalVal("");

    }
    else if(buttonText === '='){
      const result = eval(calVal);

      // u can pass a string into eval func then it evaluates that acc to the mathematical eqn and gives you the result 

      setCalVal(result);


    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  }

  return (
    <div className={styles.calculator}>

      <Display displayValue={calVal}></Display>
      <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
 
     
    </div>

  );
}

export default App;
