import React, { useState } from 'react'

const Header = () => {

  return (
    <div className='fluid-container' >
      <div className='headerback'>
        <div className='nav'>
          <div className='merge'>
            <a href="#home"><img src="https://miro.medium.com/max/800/1*HcPH5uR5H7XCyfIfBQroZQ.png" className='logo' alt="img" />
            </a>

            <ul className='nav-link'>
              <div class="dropdown">
                <button class="dropbtn">
                  Features
                </button>
                <div class="dropdown-content">
                  <a href="#">4x More Efficient Specification</a>
                  <a href="#">Automate and Centralize Procurement</a>
                  <a href="#">Create Firm-Wide Standard and Visibility</a>
                  <a href="#">Collabrate Better</a>
                  <a href="#">Track Budget Against Cost in Real Time</a>
                  <a href="#">Preserve Property Value</a>
                  <a href="#">Sync Data With Other Programs</a>
                </div>
              </div>
              <div class="dropdown">
                <button class="dropbtn">
                  Use Cases
                </button>
                <div class="dropdown-content">
                  <a href="#">By Industry</a>
                  <div className='dropalign'>
                    <a href="#">Hospitality</a>
                    <a href="#">Franchise</a>
                    <a href="#">Senior Housing</a>
                    <a href="#">Design and Procurent Firms</a>
                    <a href="#">Foodservice</a>
                    <a href="#">Student Housing</a>
                  </div>
                  <a href="#">By Role</a>
                  <div className='dropalign'>
                    <a href="#">Director of Procurement</a>
                    <a href="#">Head of Design</a>
                    <a href="#">Materials Librarian</a>
                    <a href="#">Franchisors</a>
                    <a href="#">Owners</a>
                  </div>
                </div>
              </div>
              <li>Pricing</li>
              <li>Blog</li>
            </ul>
          </div>
          <div >
            <div className='login '>
              <button className='bt1'>Sign in</button>
              <button className='bt2'>Sign up Free</button>
            </div>
          </div>
        </div>
        <div className='slogo'>
          <h1>Align Your Team Faster With New "Group By" Feature</h1>
        </div>
      </div>
    </div>
  )
}
{/* 
         
          <li>Home</li>
            <li>Prouct</li>
            <li>Service</li>
            <li>Contact</li>
            <li>Login</li>
        */}

export default Header
