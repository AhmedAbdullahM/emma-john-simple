import React from 'react';
import './Order.css'
import { useLoaderData, Link } from 'react-router-dom';
import { useState } from 'react'
import Cart from '../Cart/Cart';
import ReviewItem from './../ReviewItem/ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
const Orders = () => {
    const {products, initialCart}= useLoaderData()
    const [cart,setCart]= useState(initialCart)
    // console.log(initialCart)
    const removeItemHandle=(id)=>{
        const remaining=cart.filter(product=>product.id !==id)
        setCart(remaining)
        removeFromDb(id)
    }
    const clearCart=()=>{
        setCart([])
        deleteShoppingCart()
      }
    return (
        <div className='shop-container'>
            <div className='orders-container'>
        {
            cart.map(product=> <ReviewItem removeItemHandle={removeItemHandle} key={product.id} product={product}></ReviewItem>)
        }
        {
            cart.length === 0 && <h2>no items found please go <Link to='/'>Shop</Link> and buy something</h2>
        }
            </div>
            <div className='cart-container'>
        <Cart clearCart={clearCart} cart={cart}>
        </Cart>
            </div>
        </div>
    );
};

export default Orders;<h2>Here orders</h2>