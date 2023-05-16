import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import CreateNavbar from '../components/CreateNavbar/CreateNavbar';
import SearchInterface from '../components/SearchInterface/SearchInterface';


const Navbar = () => {
  const bottomNavbarSelections = ['All Popewear', 'Headwear', 'Outerwear', 'Footwear', 'Accessories', 'Church Finder', 'Gift Cards', 'Track Order', 'Help'];
  const bottomNavbarLinkPaths = ['all-popewear', 'headwear', 'outerwear', 'footwear', 'accessories', 'church-finder', 'gift-cards', 'track-order', 'help'];
  return (
    <>
      <div className='top-bar'>
        <p>#2 Pope Improvement Retailer</p>
      </div>
      <div className='navbar-container'>
        <div className='navbar-secondary-container'>

          <div className='main'>
            
            <div className='left-content'>
              <div className='logo-container'>
                <Link className='logo-link' to='/'>
                  <img className='logo' src={require('../assets/official-seal-of-the-vatican-city.png')} alt=''/>
                </Link>
              </div>
            </div>

            <div className='right-content'>

              <SearchInterface placeholder='What can we help you find today?' image='search.png'/>
              
              <div className='bottom-navbar'>
                <CreateNavbar selections={bottomNavbarSelections} paths={bottomNavbarLinkPaths} classname='bottom-navbar-selection'/>
              </div>

            </div>

          </div>


        </div>
      </div>
    </>
  )
}

export default Navbar
