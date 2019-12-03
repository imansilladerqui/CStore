import history from './history';
import Home from './pages/Home';
import Pizarra from './pages/Pizarra';
import ultimosMovimientos from './pages/ultimosMovimientos';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import UserProvider from './contexts/UserProvider';

const App = () => {
    return (
        // <UserProvider>
            <Router history={history}>
                <Route path="/" exact component={Home}/>
                <Route path="/ultimosMovimientos" component={ultimosMovimientos}/>
                <Route path="/pizarra" component={Pizarra}/>
            </Router>
        // </UserProvider>
    );
};

export default App;