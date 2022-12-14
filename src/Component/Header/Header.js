import React from 'react';
import logo from '../../images/Logo.svg'
import  './Header.css'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <nav className='header'>
           <Link to={'/'}> <img src={logo} alt="" /></Link>
            <div>
                <Link to="/">shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
            </div>
        </nav>
    );
};

export default Header;