import React from 'react';
import { connect } from 'react-redux';
import { makeApiCall } from '../actions';

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

    // render() {

    // }

}