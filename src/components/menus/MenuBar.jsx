import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import UserDropDown from './UserDropDown';
import UserProvider from '../../contexts/UserProvider';
import {data} from '../../loginData';
import _ from 'lodash';
import PassportLogo from '../../res/passport-1.svg';
import logo from '../../res/logo.svg';

const MenuBar = () => {
    const userData = useContext(UserProvider.context);
    const loginType = !_.isEmpty(userData) ? _.find(data, userData => data.name === userData.source) : {};

    return (
        <div className='menu-bar'>
            <Link className='btn menu-btn noHover logobox' to='/' title='Home'>
                <img
                    src={logo}
                    alt='logo'
                />
            </Link>
            {
                !_.isEmpty(userData) &&
                <div className='btn menu-btn noHover' title={`${userData.name} data`} style={{ float: 'right', paddingTop: 0, paddingBottom: 0, position: 'relative', top: '50%', transform: 'translateY(-50%)' }}>
                    <div className='app-icon-container'>
                        <img
                            className='btn-icon'
                            src={userData.imageUrl}
                            alt={loginType.alt}
                        />
                    </div>
                </div>
            }

            {
                _.isEmpty(userData) &&
                <div className='btn menu-btn noHover' title='Home' style={{ float: 'right', paddingTop: 0, paddingBottom: 0, position: 'relative', top: '50%', transform: 'translateY(-50%)' }}>
                    <img
                        src={PassportLogo}
                        alt='passport.js logo'
                    />
                </div>
            }

            <UserDropDown loggedUser={userData}/>

        </div>
    );
};


export default MenuBar;