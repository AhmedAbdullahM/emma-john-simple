import React from 'react';
import './Cart.css'
const Cart = ({cart,clearCart,children}) => {
    // console.log(cart)
    let total=0
    let shipping=0;
    let tax=0;
    let quantity=0;
    for (const product of cart){
        quantity=quantity+product.quantity;
         total=total+product.price*product.quantity;
         shipping=shipping+product.shipping; 
    }
    tax=(total*.1).toFixed(2)
   let grandTotal=total+shipping+parseFloat(tax);


    return (
        <div className='cart'>
             <h4>Order summary</h4>
        <h5>Selected Items: {quantity}</h5>
        <p>Total Price:${total}</p>
        <p>Total shipping:${shipping}</p>
        <p>Tax:${tax}</p>
        <h4>Grand Total:${grandTotal}</h4>
        <button onClick={clearCart}>Clear Cart</button>
        <br />
        {children}
        </div>
    );
};

export default Cart;