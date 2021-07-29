/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import PropTypes from 'prop-types';


function Recipe(props) {
    return (
    <React.Fragment>
        <img src={props.recipeImage} alt='recipe photo' className='recipePicture'></img>
        <h2>{props.name}</h2>
        <h3><strong>Category:</strong> {props.category}</h3>
        <h3><strong>Cuisine:</strong> {props.cuisine}</h3>
        <h4><strong>Ingredients:</strong> {props.ingredients}</h4>
        <h4><strong>Total Recipe Time:</strong> {props.time}</h4>
        <h4><strong>Yields:</strong> {props.makes}</h4>
    <div className ='recipeCard'>
        <h4><strong>Instructions:</strong> {props.instructions}</h4>  
    </div>
    </React.Fragment>
    )
}

Recipe.propTypes = {
recipeImage: PropTypes.string,
name: PropTypes.string,
category: PropTypes.string,
cuisine: PropTypes.string,
ingredients: PropTypes.string,
time: PropTypes.string,
makes: PropTypes.number,
instructions: PropTypes.string,
recipeId: PropTypes.number
}

export default Recipe; 