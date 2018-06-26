import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';    
import expensesReducer from '../reducers/expenses';
import filterReducer from '../reducers/filters';
import authReducer from '../reducers/auth';
import paginationReducer from '../reducers/pagination';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore( 
        combineReducers({
            expenses: expensesReducer,
            filters: filterReducer,
            auth: authReducer,
            pagination: paginationReducer

        }),
        composeEnhancers(applyMiddleware(thunk))
        // add redux dev tools
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
}