import React, { useEffect } from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

// slug - an unique element
const Product = ({ product: { image, name, slug, price, soldout, disableBtn , countInStock} }) => {

  // Soo, useEffect here solving problem with slug.current The Effect Hook lets you perform side effects in function components:

  useEffect(() => {
    // This logs the value of `slug` as it changes
    console.log('value of image:', slug);
  }, [slug]);

  // This means that nothing is rendered if `slug` is undefined
  if (!slug) return null;

  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <img 

          // cuz we will have multi images we do it with &&
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            className="product-image"
          />
          <p className="product-name">{name}</p>
          <p className="product-price">${price}</p>

          
          <p className="product-name">{soldout}</p>

          <p className="product-name">
                          {countInStock > 0
                            ? 'IN STOCK' 
                            : 'SOLD OUT'}
                        </p>
        </div>
      </Link>
    </div>
  )
}

export default Product
