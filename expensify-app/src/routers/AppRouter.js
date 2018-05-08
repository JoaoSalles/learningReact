import React from 'react';
import { Router, Route, Switch, Link, NavLink} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import AddExpenseComponent from './../componets/AddExpenseComponent'
import ExpenseDashboardPage from './../componets/ExpenseDashboardPage'
import EditExpenseComponent from './../componets/EditExpenseComponent'
import LoginComponent from './../componets/Login'
import NotFoundPage from './../componets/NotFoundPage'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export const history = createHistory();

const AppRouter = () => (

    <Router history={history}> 
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginComponent} exact={true}/>
                <PrivateRoute path="/dashboard" component={ExpenseDashboardPage}/>
                <PrivateRoute path="/create" component={AddExpenseComponent}/>
                <PrivateRoute path="/edit/:id" component={EditExpenseComponent}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </Router >
);


export {AppRouter as default}