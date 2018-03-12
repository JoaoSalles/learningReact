import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'
import Header from './../componets/Header'
import NotFoundPage from './../componets/NotFoundPage'
import Home from './../componets/Home'
import Portifolio from './../componets/Portifolio'
import Contact from './../componets/Contact'
import PortifolioItem from './../componets/PortifolioItem'

const AppRouter = () => (
    <BrowserRouter> 
    <div>
        <Header/>
        <Switch>
            <Route path="/" component={Home} exact={true}/>
            <Route path="/portifolio" component={Portifolio} exact={true}/>
            <Route path="/portifolio/:id" component={PortifolioItem}/>
            <Route path="/contact" component={Contact}/>
            <Route component={NotFoundPage}/>
        </Switch>
    </div>
    </BrowserRouter>
);


export {AppRouter as default}