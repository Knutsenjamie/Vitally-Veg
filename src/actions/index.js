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