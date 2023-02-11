import React, { useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link';

import logo from '../public/styles/logo.png'

import { AiOutlineShopping } from 'react-icons/ai'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';


import { Cart } from './';
import { useStateContext } from '../context/StateContext';




const Navbar = ({ logoNav }) => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();



  return (
    <div className="navbar-container">

      <Link className="logo" href='/'>
        <div>
          <Image className="logo-class"
            src={logo} alt="logo-g"
          />
        </div>
      </Link>
      <a href="default.asp"></a>

      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
      </button>
      <span className="cart-item-qty">{totalQuantities}</span>

      {showCart && <Cart />}

    </div>
  )
}

export default Navbar