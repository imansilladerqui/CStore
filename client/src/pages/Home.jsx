import React, {useContext} from 'react';
import MenuBar from '../components/menus/MenuBar';
import ModuloCompra from '../components/moduloCompra';
import UserProvider from '../contexts/UserProvider';
import ComoComprar from '../components/comoComprar';
import Colaboramos from '../components/colaboramos';
import Invertir from '../components/invertir';
import CryptoMaps from '../components/cryptomaps';
import Footer from '../components/footer';


const Home = (props) => {
    const userData = useContext(UserProvider.context);
    return (
        <div className="body">
            <MenuBar/>
            <ModuloCompra user={userData} {...props} />
            <ComoComprar/>
            <Colaboramos/>
            <Invertir/>
            <CryptoMaps/>
            <Footer/>
        </div>

    );
};

export default Home;