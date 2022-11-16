import React from 'react';
import { Link } from 'react-router-dom';
import './SingleDrinks.css'
const SingleDrinks = (props) => {
    // console.log(props);
    const {strDrinkThumb,idDrink,strGlass,strInstructions,strCategory}=props.drink;
   
    return (
        <div className="drink">
            <img src={strDrinkThumb} alt=""  />
            <h2>{strCategory}</h2>
            <h3>{strGlass}</h3>
            <p>{strInstructions}</p>
            <Link to={`/Details/${idDrink}`}>Need Ingridents?</Link>
        </div>
    );
};

export default SingleDrinks;