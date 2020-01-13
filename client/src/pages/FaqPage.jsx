import React from 'react';
import MenuBar from '../components/menus/MenuBar';
import Faq from '../components/faq';

const FaqPage = (props) => {
    return (
        <div className="body">
            <MenuBar {...props}/>
            <Faq {...props}/>
        </div>

    );
};

export default FaqPage;