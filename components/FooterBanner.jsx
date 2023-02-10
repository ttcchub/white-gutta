import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const FooterBanner = ({ footerBanner: { discount, largeText1, largeText2, saleTime, smallText, midText, desc, product, buttonText, image } }) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p className="bannerP" >{discount}</p>
          <h3 className="bannerHeadline" id='bannerHeadline'>{largeText1}</h3>
          <h3 className="bannerHeadline" id='bannerHeadline'>{largeText2}</h3>
          <p>{saleTime}</p>
        </div>
        <div className="right">
          <p className="bannerP-right" >{smallText}</p>
          <h3 className="bannerHeadline-right" >{midText}</h3>
          <p className="bannerP-right" >{desc}</p>
          <Link href={`/product/${product}`}>
            <button type="button" className="buttonPrch">{buttonText}</button>
          </Link>
        </div>

        <img 
          src={urlFor(image)} className="footer-banner-image"
        />
      </div>
    </div>
  )
}

export default FooterBanner