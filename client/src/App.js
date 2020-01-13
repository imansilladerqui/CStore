import history from './history';
import Home from './pages/Home';
import MovimientosPage from './pages/MovimientosPage';
import FaqPage from './pages/FaqPage';
import LoginPage from './pages/LoginPage';
import ResumenCompra from './pages/ResumenCompra';
import SuccessPage from './pages/SuccessPage';
import React from 'react';
import {Router, Route} from "react-router-dom";
import UserProvider from './contexts/UserProvider';

const App = () => {
    return (
        <UserProvider>
            <Router history={history}>
                <Route path="/" exact component={Home}/>
                <Route path="/ultimosmovimientos" component={MovimientosPage}/>
                <Route path="/faq" component={FaqPage}/>
                <Route path="/login" component={LoginPage}/>
                <Route path="/resumencompra" component={ResumenCompra}/>
                <Route path="/success" component={SuccessPage}/>
            </Router>
        </UserProvider>
    );
};

export default App;