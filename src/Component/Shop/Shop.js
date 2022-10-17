import React, { useEffect, useState} from 'react';
import Product from '../product/Product';
import './Shop.css'
import Cart from './../Cart/Cart';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb';
import { useLoaderData, Link } from 'react-router-dom';

const Shop = () => {
 const products=useLoaderData()
   const [cart,setCart]= useState ([])

  const clearCart=()=>{
    setCart([])
    deleteShoppingCart()
  }

   useEffect(()=>{
    const storedCart=getStoredCart()
    const savedCart=[]
   for(const id in storedCart){
    const addedProduct=products.find(product=>product.id === id)
    if(addedProduct){
        const quantity=storedCart[id]
        addedProduct.quantity=quantity;
        savedCart.push(addedProduct)
        // console.log(addedProduct)
    }
   }
   setCart(savedCart)
   },[products])


   const handleAddToCart=(selectedProduct)=>{
    // console.log(product)
   let newCart=[];
    const exists=cart.find(product=>product.id === selectedProduct.id)
    if(!exists){
        selectedProduct.quantity=1;
        newCart=[...cart,selectedProduct]
    }
    else{
        const rest=cart.filter(product=>product.id !== selectedProduct.id)
        exists.quantity=exists.quantity+1;
        newCart=[...rest,exists]
    }
        setCart(newCart)
        addToDb(selectedProduct.id)
   }
    return (
        <div className='shop-container'>
             {/* <h3>Products total: {products.length} </h3> */}
             
            <div className="product-container">
           
            {
                products.map(product=><Product key={product.id}
                 product={product}
                 handleAddToCart={handleAddToCart}
                 ></Product>)
            }
            </div>

            <div className="cart-container">
            <Cart cart={cart} clearCart={clearCart}>
            <Link to='/orders'><button>Review Orders</button></Link>
            </Cart>
            </div>
        </div>
    );
};

export default Shop;