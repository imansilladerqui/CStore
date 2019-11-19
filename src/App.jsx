import history from './history';
import Home from './pages/Home';
import MenuBar from './components/menus/MenuBar';
import Profile from './pages/Profile';
import React from 'react';
import {Router, Route} from 'react-router-dom';
import UserProvider from './contexts/UserProvider';



const App = () => {
    return (
        <Router history={history}>
            <UserProvider>
                <Route path="/" component={MenuBar} />
                <Route path="/" exact component={Home}/>
                <Route path="/profile" component={Profile}/>
            </UserProvider>
        </Router>
    );
};

export default App;
