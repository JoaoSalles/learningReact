import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import 'normalize.css/normalize.css'
import './styles/styles.scss';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses'


const store = configureStore();

// create action
store.dispatch(addExpense({description: 'Gas Bill', amount: 250, createdAt: 32101}))
store.dispatch(addExpense({description: 'Water Bill', amount: 150, createdAt: 31032}))

// set filter action
store.dispatch(setTextFilter('bil'));
const state = store.getState()
console.log(getVisibleExpenses(state.expenses, state.filters));

ReactDOM.render(
    <AppRouter />, 
    document.getElementById('app')
);
