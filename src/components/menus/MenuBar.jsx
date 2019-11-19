import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import UserDropDown from './UserDropDown';
import UserProvider from '../../contexts/UserProvider';
import {data} from '../../data';
import _ from 'lodash';
import PassportLogo from '../../res/passport-1.png';
import logo from '../../res/logo.svg';

const MenuBar = () => {
    const userData = useContext(UserProvider.context);
    const loginType = !_.isEmpty(userData) ? _.find(data, d => d.name === userData.provider) : {};

    return (
        <div className='menu-bar'>
            <Link className='btn menu-btn' to='/' title='Home'>
                <img
                    src={logo}
                    alt='logo'
                    style={{ height: 19 }}
                />
            </Link>
            {
                !_.isEmpty(userData) &&
                <div className='btn menu-btn noHover' title={`${loginType.name} data`} style={{ float: 'right' }}>
                    <div className='app-icon-container'>
                        <img
                            className='btn-icon'
                            src={userData.photos[0].value}
                            alt={loginType.alt}
                        />
                    </div>
                </div>
            }

            {
                _.isEmpty(userData) &&
                <div className='btn menu-btn noHover' title='Home' style={{ float: 'right' }}>
                    <img
                        src={PassportLogo}
                        alt='passport.js logo'
                        style={{ height: 19 }}
                    />
                </div>
            }

            <UserDropDown loggedUser={userData}/>

        </div>
    );
};


export default MenuBar;