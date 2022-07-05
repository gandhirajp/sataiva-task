import React from 'react'

const Navbar = () => {
  return (
    <div className='head'>
      <div className='hi'>
        <nav>
          <input type="checkbox" id="check" />
          <label for="check" className='checkbtn'>
            <i className='fas fa-bars'></i>
          </label>
          <label className='logo'> <img src="https://miro.medium.com/max/800/1*HcPH5uR5H7XCyfIfBQroZQ.png" className='logg' alt="img" />
          </label>
          <ul className='navv'>
            <a href="#">
              <div class="dropdown">
                <button className="dropbtn">
                  Features
                </button>
                <div className="dropdown-content">
                  <a href="#">4x More Efficient Specification</a>
                  <a href="#">Automate and Centralize Procurement</a>
                  <a href="#">Create Firm-Wide Standard and Visibility</a>
                  <a href="#">Collabrate Better</a>
                  <a href="#">Track Budget Against Cost in Real Time</a>
                  <a href="#">Preserve Property Value</a>
                  <a href="#">Sync Data With Other Programs</a>
                </div>
              </div>
            </a>
            <a href="#">
              <div class="dropdown">
                <button class="dropbtn">
                  Use Cases
                </button>
                <div class="dropdown-content">
                  <span><a href="#">By Industry</a></span>
                  <div className='dropalign'>
                    <a href="#">Hospitality</a>
                    <a href="#">Franchise</a>
                    <a href="#">Senior Housing</a>
                    <a href="#">Design and Procurent Firms</a>
                    <a href="#">Foodservice</a>
                    <a href="#">Student Housing</a>
                  </div>
                 <span> <a href="#">By Role</a></span>
                  <div className='dropalign'>
                    <a href="#">Director of Procurement</a>
                    <a href="#">Head of Design</a>
                    <a href="#">Materials Librarian</a>
                    <a href="#">Franchisors</a>
                    <a href="#">Owners</a>
                  </div>
                </div>
              </div>
            </a>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
          <div className='log'>
            <button className='sig'>Sign in</button>
            <button className='sig'>Sign Up Free</button>
          </div>
        </nav>
        <div className='slogo'>
          <h1>Align Your Team Faster With New "Group By" Feature</h1>
        </div>
      </div>
    </div>
  )
}

export default Navbar
