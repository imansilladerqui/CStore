import React from 'react';

const Card = ({img, href, color, arsQty}) => {
    return (
        <div
            className="card"
            style={{
                boder: `1px solid ${color}`,
                borderRadius: 2,
                width:'100%',
                marginTop: '50px'
            }}
            onClick={()=>{
                localStorage.setItem('arsQty', arsQty.arsQty);
                window.location = href
            }}
        >
            <div
                style={{
                    minHeight: 50,
                    background: `url("${img}") no-repeat center center / 25% ${color}`
                }}
            >
            </div>
        </div>
    );
};

export default Card