import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
             <h4>Order summary</h4>
        <h5>Selected Items: {cart.length}</h5>
        </div>
    );
};

export default Cart;