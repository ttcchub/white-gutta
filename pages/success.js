import React, { useState, useEffect } from 'react';
import Link from 'next/link';


import { useStateContext } from '../context/StateContext';
import { runFireworks } from '../lib/utils';

import logo from '../public/styles/G*logo.png';
import Image from 'next/image'

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  
  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">


        <Link className="logo-suc"  href='/'>
        <div>
          <Image className="logo-class"
            src={logo} alt="logo-g"
          />
        </div>
        </Link>


        <h2>Thanx for your order!</h2>
        <p className="email-msg">After purchase, we will start shipping shortly.</p>
        <p className="description">Please be patient while waiting for your order. Check your mailbox from time to time for updates.If you have any questions, please email us
          <a className="email" href="mailto:guttastore@protonmail.com">
            guttastore@proton.com
          </a>
        </p>
        <Link href="/">
        <button type="button" width="300px" className="btn">
            BACK
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Success