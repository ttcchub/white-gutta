import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import Image from 'next/image'

import Navbar from './Navbar';
import Footer from './Footer';
// import  gif from '../public/styles/giv.gif';


const Layout = ({ children }) => {
  return (
    <div src={gif} className="gif">
      <Head>
        <header>
          <Navbar />
        </header>
      </Head>
//       <div>
//           <Image className=""
//             src={gif} alt="gif-g"
//           />
//         </div>
 
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
