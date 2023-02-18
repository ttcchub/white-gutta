import React from 'react';
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className='contacts'>
        <p className="official"> 2023 Official WebStore Ⓡ Gutta Web Store </p>
        <p className="rofd"> Rose of Distribution </p>
        <a className="instagram" href='https://www.instagram.com/gutta.cc/'  target="_blank" rel="noreferrer"  > Instagram </a>
      </div>  
      <p> </p>
      <p> </p>
      <a href='https://www.instagram.com/gutta.cc/' target="_blank" rel="noreferrer" className="icons"  >
        <AiFillInstagram />
      </a>
    </div>
  )
}

export default Footer


