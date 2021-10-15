import React from "react";
import pizzaPhoto from '../Pizza.jpg'

export default function PizzaForm(props) {
  const { values, submit, errors, disabled, change } = props;

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onChange = (evt) => {
    const { name, value, checked, type } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };

  return (
    <form className="form-container" onSubmit={onSubmit}>
      <div>
        <h3>Build your own pizza</h3>
        <img src={pizzaPhoto} alt="Delicious pizza" />
      </div>
      <div>
        <h2>Build your own Pizza!</h2>
      </div>
      <div>
        <h2>Choice of size</h2>
        <p>Required</p>
      </div>
      <div>
        <label>
          <select onChange={onChange} values={values.role} name="size">
            <option value="">--Select a size--</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </label>
      </div>
      <div>
        <h2>Choice of sauce</h2>
        <p>Required</p>
      </div>
      <div>
        <label>
          Original Red
          <input
            type="radio"
            name="sauce"
            value="original-red"
            onChange={onChange}
            checked={values.sauce === "original-red"}
          />
        </label>

        <label>
          Garlic Ranch
          <input
            type="radio"
            name="sauce"
            value="garlic-ranch"
            onChange={onChange}
            checked={values.sauce === "garlic-ranch"}
          />
        </label>

        <label>
          BBQ
          <input
            type="radio"
            name="sauce"
            value="bbq"
            onChange={onChange}
            checked={values.sauce === "bbq"}
          />
        </label>

        <label>
          Spinach Alfredo
          <input
            type="radio"
            name="sauce"
            value="spinach-alfredo"
            onChange={onChange}
            checked={values.sauce === "spinach-alfredo"}
          />
        </label>
      </div>

      <div>
        <h2>Toppings</h2>
        <p>Choose up to 10</p>
      </div>
      <div>
        <label>
          Pepperoni
          <input
            type="checkbox"
            name="pepperoni"
            onChange={onChange}
            checked={values.pepperoni}
          />
        </label>
        <label>
          Sausage
          <input
            type="checkbox"
            name="sausage"
            onChange={onChange}
            checked={values.sausage}
          />
        </label>
        <label>
          Canadian Bacon
          <input
            type="checkbox"
            name="canadian-bacon"
            onChange={onChange}
            checked={values.canadianBacon}
          />
        </label>
        <label>
          Spicy Italian Sausage
          <input
            type="checkbox"
            name="spicy-italian-sausage"
            onChange={onChange}
            checked={values.spicyItalianSausage}
          />
        </label>
        <label>
          Grilled Chicken
          <input
            type="checkbox"
            name="grilled-chicken"
            onChange={onChange}
            checked={values.grilledChicken}
          />
        </label>
        <label>
          Onions
          <input
            type="checkbox"
            name="onions"
            onChange={onChange}
            checked={values.onions}
          />
        </label>
        <label>
          Green Pepper
          <input
            type="checkbox"
            name="green-pepper"
            onChange={onChange}
            checked={values.greenPepper}
          />
        </label>
        <label>
          Diced Tomatoes
          <input
            type="checkbox"
            name="diced-tomatoes"
            onChange={onChange}
            checked={values.dicedTomatoes}
          />
        </label>
        <label>
          Black Olives
          <input
            type="checkbox"
            name="black-olives"
            onChange={onChange}
            checked={values.blackOlives}
          />
        </label>
        <label>
          Roasted Garlic
          <input
            type="checkbox"
            name="roasted-garlic"
            onChange={onChange}
            checked={values.roastedGarlic}
          />
        </label>
        <label>
          Artichoke Hearts
          <input
            type="checkbox"
            name="artichoke-hearts"
            onChange={onChange}
            checked={values.artichokeHearts}
          />
        </label>
        <label>
          Three Cheese
          <input
            type="checkbox"
            name="three-cheese"
            onChange={onChange}
            checked={values.threeCheese}
          />
        </label>
        <label>
          Pineapple
          <input
            type="checkbox"
            name="pineapple"
            onChange={onChange}
            checked={values.pineapple}
          />
        </label>
        <label>
          Extra Cheese
          <input
            type="checkbox"
            name="extra-cheese"
            onChange={onChange}
            checked={values.extraCheese}
          />
        </label>
      </div>

      <div>
        <h2>Special instructions</h2>
      </div>
      <div>
        <label>
          <input
            type="text"
            name="special"
            value={values.special}
            onChange={onChange}
          />
        </label>
      </div>
      <div className="submit">
        <button disabled={disabled}>Add to order</button>

        <div className="errors">
          <div>{errors.size}</div>
          <div>{errors.sauce}</div>
        </div>
      </div>
    </form>
  );
}
