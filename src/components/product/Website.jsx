import React from 'react'
import instagram from "../image/instagram.png"
import twitter from "../image/twitter.png"
import fb from "../image/fb.png"
import pinterest from "../image/pinterest.png"
import linkedin from "../image/linkedin.png"
const Website = () => {
   
  return (
    <div className='website'>
     <a href="#">
        <img className='img' src={instagram} alt="instagram" />
     </a>
     <a href="#">
        <img className='img' src={twitter} alt="twitter" />
     </a>
     <a href="#">
        <img className='img' src={fb} alt="fb" />
     </a>
     <a href="#">
        <img className='img' src={pinterest} alt="in" />
     </a>
     <a href="#">
        <img className='img' src={linkedin} alt="li" />
     </a>
     
    </div>
  )
}

export default Website
