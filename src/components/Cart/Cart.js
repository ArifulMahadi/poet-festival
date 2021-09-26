import React from 'react';
import './Cart.css'

const Cart = (props) => {
    
    const { cart } = props
    let total = 0;
    for (const information of cart){
        total = total + information.salary
    };

    let name = '';
    for (const poetName of cart){
        name = name + poetName.name;
    }

    return (
        <div className='cart-container'>
            <h4>poets added:{props.cart.length}</h4>
            <p>total costs: {total}</p>
            <h2>{name}</h2>
            
        </div>
    );
};

export default Cart;