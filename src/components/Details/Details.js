import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';


    const Details = () => {
    const drinks=useLoaderData();
     const {strDrinkThumb,idDrink,strGlass,strInstructions,strCategory,strIngredient1,strIngredient2,strIngredient3}=drinks.drinks[0];
    console.log(drinks);
    return (
        <div>
            <h1>Details {strCategory}</h1>
            <img src={strDrinkThumb} alt=""  />
            <p>{strGlass}</p>
            <p>{strInstructions}</p>
            <p>Ingridents: {strIngredient1} {strIngredient2} {strIngredient3}</p>
            <button>
                <Link to='/Menu'>Back</Link>
            </button>
        </div>
    );
};

export default Details;