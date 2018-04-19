import React from 'react';
import { Router, Route, Switch, Link, NavLink} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import AddExpenseComponent from './../componets/AddExpenseComponent'
import ExpenseDashboardPage from './../componets/ExpenseDashboardPage'
import EditExpenseComponent from './../componets/EditExpenseComponent'
import LoginComponent from './../componets/Login'
import HelpExpenseComponent from './../componets/HelpExpenseComponent'
import NotFoundPage from './../componets/NotFoundPage'
import PrivateRoute from './PrivateRoute'

export const history = createHistory();

const AppRouter = () => (

    <Router history={history}> 
        <div>
            <Switch>
                <Route path="/" component={LoginComponent} exact={true}/>
                <PrivateRoute path="/dashboard" component={ExpenseDashboardPage}/>
                <PrivateRoute path="/create" component={AddExpenseComponent}/>
                <PrivateRoute path="/edit/:id" component={EditExpenseComponent}/>
                <Route path="/help" component={HelpExpenseComponent}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </Router >
);


export {AppRouter as default}