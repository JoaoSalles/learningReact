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
store.dispatch(addExpense({description: 'Gas Bill', amount: 1, createdAt: 1521126000000}))
store.dispatch(addExpense({description: 'Water Bill', amount: 2, createdAt: 1521126000000}))
store.dispatch(addExpense({description: 'Rent', amount: 3, createdAt: 1521126000000}))
const state = store.getState()

// const watching = store.subscribe( () => {
//     console.log(store.getState());
// });



const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)

ReactDOM.render(
    jsx, 
    document.getElementById('app')
);
