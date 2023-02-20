import React, { useState, useEffect } from 'react';
import Link from 'next/link';


import { useStateContext } from '../context/StateContext';
import { runFireworks } from '../lib/utils';

import logo from '../public/styles/logo.png';
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
        <h2 className="thanx-msg" >Thanx for your order!</h2>
        <p className="email-msg description">After purchase, we will start shipping shortly. Please be patient while waiting for your order. Check your mailbox from time to time for the updates. If you have any questions, please send us email </p>
        <br>
        </br>
        <a className="email" href="mailto:guttastore@protonmail.com">
            guttastore@proton.com
          </a>
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
