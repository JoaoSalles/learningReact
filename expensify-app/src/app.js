import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux';
import AppRouter, { history } from './routers/AppRouter'
import configureStore from './store/configureStore'
import { startSetExpenses } from './actions/expenses';
import { initialize, setPageSize } from './actions/pagination';
import { login, logout } from './actions/auth';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import {firebase} from './firebase/firebase';
import 'react-dates/lib/css/_datepicker.css'; 
import LoadingPage from './componets/LoadingPage';

const store = configureStore();

// // create action
// store.dispatch(addExpense({description: 'Gas Bill', amount: 1, createdAt: 1521126000000}))
// store.dispatch(addExpense({description: 'Water Bill', amount: 2, createdAt: 1521126000000}))
// store.dispatch(addExpense({description: 'Rent', amount: 3, createdAt: 1521126000000}))
// const state = store.getState()

// const watching = store.subscribe( () => {
//     console.log(store.getState());
// });



const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

let hasRenderer = false;
const rederApp = () => {
    if (!hasRenderer) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRenderer = true;    
    } else {
        hasRenderer = false;
    }
}

store.dispatch(initialize());
store.dispatch(setPageSize(5));


ReactDOM.render(<LoadingPage />, document.getElementById('app'));

firebase.auth().onAuthStateChanged( (user) => {
    if (user) {
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then( () => {
            rederApp();
            if ( history.location.pathname === '/') {
                history.push("/dashboard");
            }
        });
    } else {
        store.dispatch(logout());
        rederApp();
        history.push("/");
    }
});