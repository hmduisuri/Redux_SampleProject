import * as actionTypes from './actionTypes';

const saveResult = (res) => {
    return {
            type: actionTypes.STOREVALUE,
            storeValue: res
        }
}

export const storeResult = (val) => {
    return (dispatch, getState) => {
        setTimeout( () => {
            // const oldCount = getState().ctr.counter;
            // console.log(oldCount);
            dispatch(saveResult(val));
        }, 2000);
    }
    
};

export const deleteResult = (resElid) => {
    return {
        type: actionTypes.DELETEVALUE,
        lstElementId: resElid
    }
};