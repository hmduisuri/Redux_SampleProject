import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import counterReducer from './store/reducers/counter';
import resultsReducer from './store/reducers/results';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultsReducer
})

const logger = store => {
    return next => {
        return action => {
            console.log('Middleware dispatching' , action);
           const result = next(action);
           console.log('middleware next state' , store.getState());
           return result;
        }
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk))); //now implement reducer next


ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
