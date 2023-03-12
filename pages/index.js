import React, { useState } from "react";
import Image from "next/image";

import { client } from "../lib/client";

import { Navbar, Product, FooterBanner, HeroBanner } from "../components";

const Home = ({ products, bannerData, logoData }) => {

  const [category,setcategory] = useState('All')
  const [allProducts, setAllProducts] = useState(products);
  let uniqueCategory = products.map((item) => item?.category?.title).filter((value, index, self) => self.indexOf(value) === index);

  const handleCategory = (cat) =>{
    setcategory(cat)
    if(cat === 'All'){
      setAllProducts(products)
    }else{
      const filterDataByCategory = products.filter(item=>item?.category?.title === cat)
      setAllProducts(filterDataByCategory)
    }
  }

  return (
    <div>
      {/* <Navbar logoNav={logoData.length && logoData[0]}  /> */}
      {/* <Navbar navBar={logoData && logoData[0]} /> */}

      <div>
        <FooterBanner footerBanner={bannerData && bannerData[0]} />
      </div>
      <div className="products-heading">
        <article>
          <h2>CYBER WORLD </h2>
          <p> UPCOMING COLLECTION </p>
        </article>
      </div>

     
      <ul className="category-wrapper">
        <li className={`category ${category === 'All' ? 'active' : null}`} onClick={()=>handleCategory("All")}>All</li>
        {
          uniqueCategory.map((item,idx)=>{
            return(
              <li className={`category ${category === item ? 'active' : null}`} key={idx} onClick={()=>handleCategory(item)}>
                <p>{item}</p>
              </li>
            )
          })
        }
      </ul>
      <div className="products-container">
        {allProducts?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>

      {/* <HeroBanner heroBanner={bannerData.length && bannerData[0]}  /> */}
    </div>
  );
};

export const getServerSideProps = async () => {
  const query =
    '*[_type == "product"]{name,details,price,slug,image[],select_size[], category->{title,slug}}';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  const logoQuery = '*[_type == "logo"]';
  const logoData = await client.fetch(logoQuery);

  return {
    props: { products, bannerData, logoData },
  };
};

export default Home;
