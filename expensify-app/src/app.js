import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux';
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import 'normalize.css/normalize.css'
import './styles/styles.scss';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses'


const store = configureStore();

// // create action
store.dispatch(addExpense({description: 'Gas Bill', amount: 250, createdAt: 32101}))
store.dispatch(addExpense({description: 'Water Bill', amount: 150, createdAt: 31032}))
store.dispatch(addExpense({description: 'Rent', amount: 550, createdAt: 33032}))
const state = store.getState()



const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)

ReactDOM.render(
    jsx, 
    document.getElementById('app')
);
