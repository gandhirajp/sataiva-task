import React from 'react'


const Website = () => {
   
  return (
    <div className='website'>
     <a href="#">
        <img className='img' src="data:image/png;base64,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" alt="insta" />
     </a>
     <a href="#">
        <img className='img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png" alt="insta" />
     </a>
     <a href="#">
        <img className='img' src="https://seeklogo.com//images/F/facebook-logo-966BBFBC34-seeklogo.com.png" alt="insta" />
     </a>
     <a href="#">
        <img className='img' src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png" alt="insta" />
     </a>
     <a href="#">
        <img className='img' src="data:image/png;base64,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" alt="insta" />
     </a>
     
    </div>
  )
}

export default Website
