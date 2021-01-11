import * as actionType from '../actions';

// initialState is like a state 
const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case actionType.STOREVALUE:
            return {
                ...state,
                // save the latest counter result -- 'concat' only update the result. 'push' : update the counter property
                //result is a array 
                results: state.results.concat({id: Math.random(), value: action.storeValue})             
            }
        case actionType.DELETEVALUE:
            // const id =2;
            // const newArray = [...state.results]
            // newArray.results.splice(id,1);
            //or else
            //filtering and getting the meetable value only and filter returnd the new array always
            const updatedArray = state.results.filter(result => result.id !== action.lstElementId);

            return {
                ...state, //copy the old state
                results: updatedArray
                // results: newArray
            }
        }
    return state;
   
}

export default reducer;