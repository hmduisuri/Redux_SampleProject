import * as actionTypes from './actionTypes';

export const increment = () => {
    return {
        type: actionTypes.INCREMENT
    }
};

export const decrement = () => {
    return {
        type: actionTypes.DECREMENT
    }
};

export const add = (value) => {
    return {
        type: actionTypes.ADDVALUE,
        value: value
    }
};

export const substract = (val) => {
    return {
        type: actionTypes.SUBSVALUE,
        value: val
    }
};