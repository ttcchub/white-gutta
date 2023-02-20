import React, { useEffect } from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const Logo = ({ logo } ) => {

  return (
    <Link className="logo"  href='/'>
      <div>
        <img src={urlFor(logo.image)} alt="logo-g"   className="logo-class" />
      </div>
    </Link>
  )
}

export default Logo 