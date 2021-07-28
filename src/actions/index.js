import * as c from './ActionTypes';

export const requestedRecipes = () => ({
  type: c.REQUEST_RECIPES
});

export const getRecipesSuccess = (recipes) => ({
  type: c.GET_RECIPES_SUCCESS,
  recipes
});

export const backToMainPage = () => ({
  type: c.BACK_TO_MAIN_PAGE,
});

export const getRecipesFailure = (error) => ({
  type: c.GET_RECIPES_FAILURE,
  error
});

export const getRecipe = (selectedRecipe) => ({
  type: c.GET_RECIPE,
  selectedRecipe
});

export const makeApiCall = () => {
    return dispatch => {
      dispatch(requestedRecipes);
      return fetch (`http://localhost:5001/api/recipes`)
        .then(function (response) {
          return response.json()
        })
        .then(
          function (jsonifiedResponse) {
            console.log(jsonifiedResponse)
            return dispatch(getRecipesSuccess(jsonifiedResponse));
          })
        .catch((error) => {
          dispatch(getRecipesFailure(error));
        });
    }
  }