import React from 'react';
import Image from 'next/image';

import { client } from '../lib/client';

import { Navbar, Product, FooterBanner, HeroBanner } from '../components';


const Home = ({ products, bannerData, logoData}) => (


  <div>
    
    {/* <Navbar logoNav={logoData.length && logoData[0]}  /> */}
    {/* <Navbar navBar={logoData && logoData[0]} /> */}


    <FooterBanner footerBanner={bannerData && bannerData[0]} />
    
    <div className="products-heading">
      <h2>Best Seller</h2>
      <p> Check the full collection </p>
    </div>

    <div className="products-container">
      {products?.map((product) => <Product key={product._id} product={product} />)}
    </div>

    {/* <HeroBanner heroBanner={bannerData.length && bannerData[0]}  /> */}
  
  </div>
);



// to fetch data NEXTjs use getServerSideProps 
export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  const logoQuery = '*[_type == "logo"]';
  const logoData = await client.fetch(logoQuery);



  return {
    props: { products, bannerData, logoData}
  }
}
 

export default Home;
