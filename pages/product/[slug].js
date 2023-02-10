// slug is lihe objectID - unique identifier
// A schema type for slugs, typically used to create unique URLs.

import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';

import { client, urlFor } from '../../lib/client';
import { Product } from '../../components';
import { useStateContext } from '../../context/StateContext';



// button.addEventListener('keyup', () => {
//     if(input.ariaValueMax.length = true) btnShow.disabled = true
//     else btnShow.disabled = false;
// }) 


const ProductDetails = ({ product, products }) => {
  const { image, name, details, price , soldout , disableBtn } = product;
  // gerring the product id 
  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

  const handleBuyNow = () => {
    onAdd(product, qty);
    setShowCart(true);
  }

  const btnReact = "purch";
  
  function eventListener() {
    if (value === true){
      btnReact.disabled = true;
    } else {
      btnReact.disabled = false;
    }
  }

  function addListener() {
    buttonToBeClicked.addEventListener(
      "click",
      eventListener,
      {
        passive: true,
        once: true
      }
    );
  }


  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            {/* img come from id that is in index address */}
            <img src={urlFor(image && image[index])} className="product-detail-image" />
          </div>
          <div className="small-images-container">
            {image?.map((item, i) => (
              <img
              key={i}
              src={urlFor(item)}
              className={i === index ? 'small-image selected-image' : 'small-image'}
              onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>

        <div className="product-detail-desc">
          <h1>{name}</h1>

          <h4>Details: </h4>
          <p>{details}</p>
          <p className="price">${price}</p>
          <div className="quantity">
          <h3>Quantity:</h3>
            <p className="quantity-desc">
              <span className="minus" onClick={decQty}><AiOutlineMinus /></span>
              <span className="num">{qty}</span>
              <span className="plus" onClick={incQty}><AiOutlinePlus /></span>
            </p>
          </div>
          <p className="product-name">{soldout}</p>

          <div className="buttons">

            <button event id="purch" type="button" className="add-to-cart" onClick={() => onAdd(product, qty)}>Add to Cart</button>

            <button event id="purch" type="button" className="buy-now" onClick={handleBuyNow}>Buy Now</button>

          </div>
        </div>
      </div>

      <div className="maylike-products-wrapper">
          <h2 > Fitable goods  </h2>
          <span className='fitIt'> Designs with limited production belongs to idea of creating unrepeatable things for our customers</span>
          <br></br>
          <span className='fitIt'> We respect the identity and distribute thoughts via our clothes.</span>
          <div className="marquee">
            <div className="maylike-products-container track">
              {products.map((item) => (
                <Product key={item._id} product={item} />
              ))}
            </div>
          </div>
      </div>
    </div>
  )
}


// we should know what will be pre-rendered that\s why we use Use static Pathws
// getStaticPaths - for Dynamical Routes and uses 'getStaticProps' , it needed to define a list of paths to be statically generated.
export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;
  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: { 
      slug: product.slug.current
    }
  }));


  return {
    paths,
    fallback: 'blocking'
  }
}

// getStaticProps - used to prerender page at  build time using the props returned by getStaticProps
// WHEN to USE IT :
// the Data required to render the page is avaliable at build time ahead of a user's request && When the data comes from a headless CMS platform

export const getStaticProps = async ({ params: { slug }}) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]'
  
  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  console.log(product);

  return {
    props: { products, product }
  }
}

export default ProductDetails