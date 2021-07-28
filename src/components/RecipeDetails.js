import React from 'react';
import PropTypes from 'prop-types';

function RecipeDetails(props) {
  const { recipe } = props;

  return (
    <React.Fragment>
          <img className='recipeImage' src={recipe.recipeImage} width='350px' alt='recipe'></img>
          <h2>{recipe.name}</h2>
          <h4>{recipe.category} - {recipe.cuisine}</h4>
        <button className='btn btn-danger' onClick={() => props.backToMainPage()}>Back To Main Page</button>
    </React.Fragment>
  )
}

RecipeDetails.propTypes = {
    recipe: PropTypes.object
  }
  
  export default RecipeDetails;
