import React, {useContext} from 'react';
import {Link as RouterLink} from 'react-router-dom';
import UserProvider from '../../contexts/UserProvider';
import _ from 'lodash';
import {Link as ScrollLink} from 'react-scroll';


// IMAGES

import logo from '../../assets/images/logo-Crypto-store-1.svg'
import menuWhite from '../../assets/images/menuwhite.svg'

const MenuBar = (props) => {
    const userData = useContext(UserProvider.context);

    return (
        <div data-collapse="medium" data-animation="default" data-duration="400" className="navbar w-nav">
            <div className="container-2 w-container">
                <RouterLink to='/' className="brand w-nav-brand">
                    <img src={logo} alt="" className="image"/>
                </RouterLink>
                <nav role="navigation" className="nav-menu-2 w-nav-menu">
                    {
                    !_.isEmpty(userData) &&
                        <RouterLink to='/ultimosmovimientos' className={`nav-link-4 w-nav-link ${((props.location &&props.location.pathname.indexOf('ultimosmovimientos') !== -1) ? 'w--current' : '')}`}>Movimientos</RouterLink>
                    }
                    <RouterLink to='/faq/bitcoin' className={`nav-link-4 w-nav-link ${((props.location &&props.location.pathname.includes('faq')) ? 'w--current' : '')}`}>Ayuda</RouterLink>
                    <ScrollLink
                        to="contacto" 
                        spy={true} 
                        smooth={true} 
                        duration={500} 
                        className='nav-link-4 w-nav-link'
                    >Contacto</ScrollLink>
                    {
                    _.isEmpty(userData) &&
                        <RouterLink to='/login' className="nav-link-4 top w-nav-link">
                            <span className="text-span-5">Login</span>
                        </RouterLink>
                    }
                    {
                    // _.isEmpty(userData) &&
                    //     <Link to='/signup' className="nav-link-4 top w-nav-link">
                    //         <span className="text-span-6">Registro</span>
                    //     </Link>
                    }
                    {
                    !_.isEmpty(userData) &&
                        <RouterLink to='/' className='nav-link-4 w-nav-link'>{userData.name}</RouterLink>
                    }
                    {
                    !_.isEmpty(userData) &&
                        <a href='/auth/logout' className="nav-link-4 top w-nav-link">
                            <span className="text-span-5">Cerrar sesión</span>
                        </a>
                    }
                </nav>
                <div className="menu-button w-nav-button">
                    <img src={menuWhite} width="10" alt="" className="image-51"/>
                </div>
            </div>
        </div>
    );
};


export default MenuBar;