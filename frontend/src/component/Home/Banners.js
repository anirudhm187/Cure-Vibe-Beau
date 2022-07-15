import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import BuyBanner from "../images/buybanner.jpg"
import TestBanner from "../images/labbanner.jpg"
import DonorBanner from "../images/donorbanner.jpg"
import "../styles/Banners.css"

class Banners extends Component{
    render(){
      return (
        <div>
          <div className="banners">
              <Link to="/buy">
                  <img src={BuyBanner} alt="" />
              </Link>
              <Link className='second' to="/test">
                  <img src={TestBanner} alt="" />
              </Link>
              <Link className='third' to="/donor">
                  <img src={DonorBanner} alt="" />
              </Link>
          </div>
        </div>
      );
    }
}

export default Banners
