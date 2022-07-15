import React from 'react'
import LabHeader from "./LabHeader.js"
import Catalogue from "./Catalogue.js"
import Footer from "../layout/Footer.js"
import "../styles/labPage.css"

const LabPage = () => {
    return (
        <>
        <div className='render'>
        <LabHeader/>
        <Catalogue/>
        <Footer/>
        </div>
        </>
    )
  }


export default LabPage
