/* eslint-disable import/no-anonymous-default-export */
import * as c from './../actions/ActionTypes';

let initialState = {
  isLoading: false,
  recipes: [],
  error: null,
  selectedRecipe: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case c.REQUEST_RECIPES:
      return Object.assign({}, state, {
        isLoading: true
      });
    case c.GET_RECIPES_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        recipes: action.recipes
      });
    case c.GET_RECIPES_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error
      });
    case c.GET_RECIPE:
      return Object.assign({}, state, {
        isLoading: false,
        selectedRecipe: action.selectedRecipe
      })
    case c.BACK_TO_MAIN_PAGE:
      return Object.assign({}, state, {
        isLoading: false,
        selectedRecipe: null
      });
    default:
      return state;
  }
};