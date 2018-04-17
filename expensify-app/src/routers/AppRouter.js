import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'
import AddExpenseComponent from './../componets/AddExpenseComponent'
import ExpenseDashboardPage from './../componets/ExpenseDashboardPage'
import EditExpenseComponent from './../componets/EditExpenseComponent'
import LoginComponent from './../componets/Login'
import HelpExpenseComponent from './../componets/HelpExpenseComponent'
import Header from './../componets/Header'
import NotFoundPage from './../componets/NotFoundPage'

const AppRouter = () => (
    <BrowserRouter> 
    <div>
        <Header/>
        <Switch>
            <Route path="/" component={LoginComponent} exact={true}/>
            <Route path="/dashboard" component={ExpenseDashboardPage}/>
            <Route path="/create" component={AddExpenseComponent}/>
            <Route path="/edit/:id" component={EditExpenseComponent}/>
            <Route path="/help" component={HelpExpenseComponent}/>
            <Route component={NotFoundPage}/>
        </Switch>
    </div>
    </BrowserRouter>
);


export {AppRouter as default}