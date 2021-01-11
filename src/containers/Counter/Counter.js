import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import * as actionType from '../../store/actions';
class Counter extends Component {
    state = {
        counter: 0
    }
//not using ------- use redux instead
    // counterChangedHandler = ( action, value ) => {
    //     switch ( action ) {
    //         case 'inc':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
    //             break;
    //         case 'dec':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
    //             break;
    //         case 'add':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
    //             break;
    //         case 'sub':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
    //             break;
    //     }
    // }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddNumCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubsNumCounter}  />

                <hr />
                <button onClick={() => this.props.onStoreValue(this.props.ctr)}>STORE VALUE</button>
                <ul>
                    {this.props.storedValue.map(srtVal => (
                        <li key = {srtVal.id} onClick={() => this.props.onDeleteValue(srtVal.id)}>{srtVal.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProp = state => {
    //this 'state' is refer X(initial)X (latest?) state of the reducer.js file // and also this return the latest count latest value of the state
    return {
        ctr: state.ctr.counter,
        storedValue: state.res.results 
    };
}

const mapDispatchToProps = dispatch => {
    return {
        //'onIncrementCounter' is behave as a funtion and whe we calling 'onIncrementCounter', it execute 'dispatch()' 
        onIncrementCounter: () => dispatch({type: actionType.INCREMENT}),
        onDecrementCounter: () => dispatch({type: actionType.DECREMENT}),
        onAddNumCounter: () => dispatch({type: actionType.ADDVALUE, value: 5}),
        onSubsNumCounter: () => dispatch({type: actionType.SUBSVALUE, value: 5}),
        onStoreValue: (paramCounter) => dispatch({type: actionType.STOREVALUE, storeValue : paramCounter}),
        onDeleteValue: (paramId) => dispatch({type: actionType.DELETEVALUE, lstElementId: paramId})
        //and now we have to impement this 'INCREMENT' in the reducer.js file
    };
}

export default connect(mapStateToProp, mapDispatchToProps)(Counter);