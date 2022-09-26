import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = ({product , handleAddToCart}) => {
    // console.log(props)
    // const {handleAddToCart,product}=props
    const {img,name,seller,price,ratings}=product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
            <p className='product-name'>{name}</p>
            <p>Price:$ {price}</p>
            <p>Manufacturer: {seller}</p>
            <p><small>Ratings: {ratings}</small></p>
            </div>
            <button className='btn-cart' onClick={()=>handleAddToCart(product)}><p>
                add to cart <span> <FontAwesomeIcon  icon={faShoppingCart}></FontAwesomeIcon></span></p>
                
                </button>
        </div>
    );
};

export default Product;