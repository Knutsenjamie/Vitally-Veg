/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import PropTypes from 'prop-types';


function Recipe(props) {
    return (
    <React.Fragment>
        <img src={props.recipePicture} alt='recipe photo' className='recipePicture'></img>
        <h1>{props.name}</h1>
        <h4>{props.category}</h4>
        <h4>{props.cuisine}</h4>
        <h4>{props.ingredients}</h4>
        <h4>{props.time}</h4>
        <h4>{props.makes}</h4>
        <h4>{props.instructions}</h4>  
    </React.Fragment>
    )
}

Recipe.propTypes = {
recipePicture: PropTypes.string,
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