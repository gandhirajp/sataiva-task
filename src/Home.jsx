import React from 'react'
import Header from './components/Header';
import Product from './components/Product';
import Data from './components/product/Data';
import Footer from './components/product/Footer';
import Navbar from './components/product/Navbar';
import Website from './components/product/Website';

const Home = () => {
  return (
    <div className='fluid-container'>
      {/* <Header /> */}
      <Navbar/>
      <Product />
      <Website />
      <Data/>
      <Footer/>
    </div>
  )
}

export default Home
