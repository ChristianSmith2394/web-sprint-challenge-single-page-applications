import React, { useState, useEffect } from "react";
import Home from "./Components/Home";
import PizzaForm from "./Components/PizzaForm";
import axios from "axios";
import * as yup from "yup";
import formSchema from "./Validation/formSchema";
import { Link, Route, Switch } from "react-router-dom";

const initialFormValues = {
  size: "",
  name: '',
  sauce: "",
  toppings: "",
  special: "",
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
  artichokeHearts: false,
  threeCheese: false,
  pineapple: false,
  extraCheese: false,
};

const initialFormErrors = {
  size: "",
  name: '',
  sauce: "",
};

const initialOrders = [];
const initialDisabled = true;

const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  const [orders, setOrders] = useState(initialOrders);


  useEffect(() => {
  }, [formValues])

  const postNewOrder = (newOrder) => {
    axios
      .post("https://reqres.in/api/orders", newOrder)
      .then((res) => {
        setOrders([res.data, ...orders]);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setFormValues(initialFormValues);
      });
  };

  const validate = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };

  const inputChange = (name, value) => {
    validate(name, value);
    console.log("NAME: ", name, " VALUE: ", value)
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const formSubmit = () => {
    const newOrder = {
      size: formValues.size.trim(),
      name: formValues.name.trim(),
      sauce: formValues.sauce.trim(),
      special: formValues.special,
      toppings: [
        "pepperoni",
        "sausage",
        "canadianBacon",
        "spicyItalianSausage",
        "grilledChicken",
        "onions",
        "greenPepper",
        "dicedTomatoes",
        "blackOlives",
        "roastedGarlic",
        "artichokeHearts",
        "threeCheese",
        "pineapple",
        "extraCheese",
      ].filter((topping) => !!formValues[topping]),
    };
    console.log(newOrder);
    postNewOrder(newOrder);
  };

  useEffect(() => {
    formSchema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

  return (
    <div>
      <nav>
        <h1>Smith Eats</h1>
        <p>World's Best Pizza, from us to you!</p>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/help">Help</Link>
        </div>
      </nav>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/pizza'>
          <PizzaForm
            values={formValues}
            change={inputChange}
            submit={formSubmit}
            disabled={disabled}
            errors={formErrors}
          />
        </Route>
    </div>
  );
};
export default App;
