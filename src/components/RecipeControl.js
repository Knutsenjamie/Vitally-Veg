import React from 'react';
import { connect } from 'react-redux';
import { makeApiCall } from '../actions';
import RecipeDetails from './RecipeDetails';
import * as a from '../actions';

class RecipeControl extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
        
        }
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(makeApiCall());
    }

    viewRecipe = (recipePage) => {
        const { dispatch } = this.props;
        const action = a.getRecipe(recipePage);
        dispatch(action);
    }

    backToMainPage = () => {
        const { dispatch } = this.props;
        const action = a.backToMainPage();
        dispatch(action);
    }

    render() {
        let currentlyVisibleState = null;
        const { error, isLoading, selectedRecipe, recipes } = this.props
        if (error) {
          return <>Error: {error.message}</>
        } else if (isLoading) {
          return <>Henlo</>
        } else if (selectedRecipe != null) {
          currentlyVisibleState =
            <RecipeDetails
              recipe={selectedRecipe}
              backToMainPage={this.backToMainPage}
            />;
    
        } else if (selectedRecipe == null) {
          currentlyVisibleState = <RecipeList
            recipes={recipes}
            viewRecipe={this.viewRecipe}
          />
        }
        return (
          <>
            {currentlyVisibleState}
          </>
        )
      }
    }
    
    
    const mapStateToProps = state => {
      return {
        recipes: state.recipes,
        isLoading: state.isLoading,
        error: state.error,
        selectedRecipe: state.selectedRecipe
      }
    }
    
    export default connect(mapStateToProps)(RecipeControl);

