import React from "react";
import { useHistory } from 'react-router-dom'
import pizzaPhoto from '../Pizza.jpg'

export default function Home() {

    const history = useHistory()
    const routeToPizza = () => {
        history.push("/pizza")
    }

    return (
        <div>
            <img
            className='home-page-img'
            src={pizzaPhoto}
            alt="Delicious pizza"
            />
            <button
                onClick={routeToPizza}
            >Pizza?
            </button>
        </div>
    )
}