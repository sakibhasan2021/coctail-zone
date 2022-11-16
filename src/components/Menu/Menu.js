import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleDrinks from '../SingleDrink/SingleDrinks';
import './Menu.css';

const Menu = () => {
    const drinks=useLoaderData();
    // console.log(drinks[0]);
    const drinksLoad=drinks.drinks
    // const {strDrinkThumb,idDrink,strGlass,strInstructions}=drinksLoad;
    // console.log(idDrink);
    return (
        <div className="drinks">
        {
            drinksLoad.map((drink,ind) =><SingleDrinks key={ind} drink={drink}></SingleDrinks>)
        }
        </div>
    );
};

export default Menu;