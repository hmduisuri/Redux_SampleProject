import * as actionType from '../actions/actionTypes';
import {updatedObject} from '../utility';

// initialState is like a state 
const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case actionType.INCREMENT:
            //old style
            return {
                ...state,
                counter: state.counter + 1
            }
            //or below one
            //     const newState = Object.assign({}, state); // clone the state into newState
            //     newState.counter = state.counter + 1; // change only the counter not toched results
            // return newState;
        case actionType.DECREMENT:
            //clean up the reducer switch
           return updatedObject(state, {counter: state.counter - 1});
        case actionType.ADDVALUE:
           return updatedObject(state, {counter: state.counter + action.value});
        case actionType.SUBSVALUE:
           return updatedObject(state, {counter: state.counter - action.value});

        default:
            return state;

        }
   
}

export default reducer;