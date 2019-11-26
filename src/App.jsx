import history from './history';
import Home from './pages/Home';
import MenuBar from './components/menus/MenuBar';
import ultimosMovimientos from './pages/ultimosMovimientos';
import React from 'react';
import {Router, Route} from 'react-router-dom';
import UserProvider from './contexts/UserProvider';



const App = () => {
    return (
        <Router history={history}>
            <UserProvider>
                <Route path="/" component={MenuBar} />
                <Route path="/" exact component={Home}/>
                <Route path="/ultimosMovimientos" component={ultimosMovimientos}/>
            </UserProvider>
        </Router>
    );
};

export default App;
