import React from "react";
import Home from './Components/Home'
import PizzaForm from "./Components/PizzaForm";
import axios from 'axios'
import * as yup from'yup'
import formSchema from './Validation/formSchema'

const App = () => {

  const initialFormValues = {
    size: '',
    sauce: '',
    toppings: '',
    pepperoni: false,
    sausage: false,
    canadianBacon: false,
    spicyItalianSausage: false,
    grilledChicken: false,
    onions: false,
    greenPepper: false,
    dicedTomatoes: false,
    blackOlives: false,
    roastedGarlic: false,
    ArtichokeHearts: false,
    threeCheese: false,
    pineapple: false,
    extraCheese: false


  }
  return (
    <>
      <h1>Smith Eats</h1>
      <p>World's Best Pizza, from us to you!</p>
      <Home />
    </>
    
  );
};
export default App;
