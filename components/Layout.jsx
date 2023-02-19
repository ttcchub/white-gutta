import React from 'react';
import Head from 'next/head';

import Image from 'next/image'


import Navbar from './Navbar';
import Footer from './Footer';
import  gif from '../public/styles/giv.gif';




const Layout = ({ children }) => {
  return (
    <div className="layout container">

      <section className='firstSection'>        
        <Head>
        <div>
            <Image className="gif"
              src={gif} alt="gif-g"
            />
          </div>
        </Head>
        <header>
          <Navbar />
        </header>
      </section>

      <section className='secondSection'>
        <main className="main-container">
          {children}
        </main>
      </section>
      <div>
      <footer>
        <Footer />
      </footer>
      </div>
    </div>

  )
}


export default Layout
