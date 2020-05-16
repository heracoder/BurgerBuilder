import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredient';
// import { object } from 'prop-types';   

const Burger = (props) => {

    // since we cannot just map through the ingredients like that because it 
    // it is an object, we have to convert it to an array, not just an array 
    // an array of the value of ingredients

    let transformedIngredient = Object.keys(props.ingredients)
    // the object.keys() here simply gets only the key values from the ingredients object
    // remember that the ingredients state was just a key value pair situation 
    // NOTE : it gets the keys and makes it an array so now tranformedIngredient, is
    // an array 
    .map(igKey => {
        // then maps through the created array 
        return [...Array(props.ingredients[igKey])].map((_,i) => {
        // the ...array() creates a new array with the size of ingredients obj/array
        // and maps tru the array, we use "_" to indicat that we dpnt care about the 
        // element itself but the "i" helps us get the index of the array
        // NB: the keys u use here have to be equal to the ones u check for in 
        // burger ingredients e.g cheese,bacon
            return <BurgerIngredient key={igKey + i} type={igKey} />;
        });
    }).reduce((arr,el) => {
        return arr.concat(el)
    },[])

    if(transformedIngredient.length === 0){
        transformedIngredient = <p>Please start adding ingredients</p>
    }
    console.log(transformedIngredient);
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredient}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

export default Burger;
