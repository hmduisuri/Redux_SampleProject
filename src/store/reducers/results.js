import * as actionType from '../actions/actionTypes';
import { updatedObject } from '../utility';

// initialState is like a state 
const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {

    const deleteResult = (state, action) => {
            // const id =2; // const newArray = [...state.results] // newArray.results.splice(id,1); 
            //or else //filtering and getting the meetable value only and filter returnd the new array always
            const updatedArray = state.results.filter(result => result.id !== action.lstElementId);
            //copy the old state // results: newArray
            return updatedObject(state, {results: updatedArray})
    }

    switch(action.type) {
        // save the latest counter result -- 'concat' only update the result. 'push' : update the counter property
        //result is a array     
        case actionType.STOREVALUE: return updatedObject(state, {results: state.results.concat({id: Math.random(), value: action.storeValue})});
        case actionType.DELETEVALUE: return deleteResult(state,action);
        default: return state;
    }
   
}

export default reducer;