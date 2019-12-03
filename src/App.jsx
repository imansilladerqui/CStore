import history from './history';
import Home from './pages/Home';
import pizarra from './pages/pizarra';
import ultimosMovimientos from './pages/ultimosMovimientos';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserProvider from './contexts/UserProvider';

const App = () => {
    return (
        <UserProvider>
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/ultimosMovimientos" exact component={ultimosMovimientos}/>
                    <Route path="/pizarra" exact component={pizarra}/>
                </Switch>
            </Router>
        </UserProvider>
    );
};

export default App;
