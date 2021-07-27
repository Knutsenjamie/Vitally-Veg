import React from 'react';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';

function EditRecipeForm(props) {
    const { recipe } = props;
    const { name, category, cuisine, ingredients, time, makes, instructions} = e.target;
  
    function handleEditRecipeFormSub(e) {
      e.preventDefault();
      props.onEditRecipe({
        name: name.value,
        category: category.value,
        cuisine: cuisine.value,
        ingredients: ingredients.value,
        time: time.value,
        makes: makes.value,
        instructions: instructions.value,
        id: recipe.id
      });
    }
  
    return (
      <React.Fragment>
        <ReusableForm
          formSubmissionHandler={handleEditRecipeFormSub}
          buttonText="Update Recipe"/>
      </React.Fragment>
    );
  }
  
  EditRecipeForm.propTypes = {
    recipe: PropTypes.object,
    onEditRecipe: PropTypes.func
  }
  
  export default EditRecipeForm;