import React, { useState, useEffect } from "react";
import Home from "./Components/Home";
import PizzaForm from "./Components/PizzaForm";
import axios from "axios";
import * as yup from "yup";
import formSchema from "./Validation/formSchema";
import { Link, Route, Switch } from "react-router-dom";

const initialFormValues = {
  size: "",
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
  sauce: "",
};

const initialOrders = [];
const initialDisabled = true;

const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  const [orders, setOrders] = useState(initialOrders);

  const getOrders = () => {
    axios
      .get("http://buddies.com/api/friends")
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

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
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const formSubmit = () => {
    const newOrder = {
      size: formValues.size.trim(),
      sauce: formValues.sauce.trim(),
      special: formValues.role.trim(),
      toppings: [
        "pepperoni",
        "sausage",
        "canadian-bacon",
        "spicy-italian-sausage",
        "grilled-chicken",
        "onions",
        "green-pepper",
        "diced-tomatoes",
        "black-olives",
        "roasted-garlic",
        "artichoke-hearts",
        "three-cheese",
        "pineapple",
        "extra-cheese",
      ].filter((topping) => !!formValues[topping]),
    };
    console.log(newOrder);
    postNewOrder(newOrder);
  };

  useEffect(() => {
    getOrders();
  }, []);

  // useEffect(() => {
  //   formSchema.isValid(formValues).then((valid) => setDisabled(!valid));
  // }, [formValues]);

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
      <Switch>
      <Route>
        <Home />
      </Route>
        <Route>
          <PizzaForm />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
