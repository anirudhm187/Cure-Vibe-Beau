import React from 'react'
import "../styles/HomeFile.css"
import HomeHeader from "./HomeHeader"
import CovidStats from "./CovidStats.js"
import Awareness from "./Awareness.js"
import Banners from "./Banners.js"
import Footer from "../layout/Footer.js"

const HomeFile = () => {
  return(
    <>
      <div className='render'>
      <HomeHeader/>
      <CovidStats/>
      <Awareness/>
      <Banners/>
      <Footer/>
      </div>
    </>
  )
}

export default HomeFile;
