import history from './history';
import Home from './pages/Home';
import pizarra from './pages/pizarra';
import ultimosMovimientos from './pages/ultimosMovimientos';
import React from 'react';
import {Router, Route} from 'react-router-dom';
import UserProvider from './contexts/UserProvider';



const App = () => {
    return (
        <Router history={history}>
            <UserProvider>
                <Route path="/" exact component={Home}/>
                <Route path="/ultimosMovimientos" component={ultimosMovimientos}/>
            </UserProvider>
            <Route path="/pizarra" component={pizarra}/>
        </Router>
    );
};

export default App;
