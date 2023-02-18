import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import Image from 'next/image'

import Navbar from './Navbar';
import Footer from './Footer';
import  gif from '../public/styles/giv.gif';


const Layout = ({ children }) => {
  return (
    <div src={gif} className="gif">
      <Head>
      </Head>

      <header>
        <Navbar />
      </header>
      <main className="main-container">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}


export default Layout
