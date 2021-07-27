import React from 'react';
import Recipe from './Recipe';
import PropTypes from 'prop-types';


function RecipeList(props) {
    const { recipes } = props
    return (
      <React.Fragment>
        {recipes.map((recipe) =>
          <Recipe
            currentRecipe={recipe}
            viewRecipe={props.viewRecipe}
            name={recipe.name}
            recipePicture={recipe.recipePicture}
            category={recipe.category}
            cuisine={recipe.cuisine}
            ingredients={recipe.ingredients}
            time={recipe.time}
            makes={recipe.makes}
            instructions={recipe.instructions}
            recipeId={recipe.recipeId}
            key={recipe.recipeId}
          />
  
        )}
      </React.Fragment>
    );
  }
  
  RecipeList.propTypes = {
    recipeList: PropTypes.array,
    viewRecipe: PropTypes.func,
    currentRecipe: PropTypes.object,
  };
  
  export default RecipeList;
