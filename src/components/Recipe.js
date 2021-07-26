import React from 'react';
import PropTypes from 'prop-types';

function Recipe(props) {
    return (
    <React.Fragment>
        <img src={props.recipePicture} alt='recipe photo' className='recipePicture'></img>
        <h1>{props.name}</h1>
        <h4>{props.category}</h4>
        <h4>{props.cuisine}</h4>
        
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
yield: PropTypes.number,
instructions: PropTypes.string,
recipeId: PropTypes.number
}

export default Recipe; 