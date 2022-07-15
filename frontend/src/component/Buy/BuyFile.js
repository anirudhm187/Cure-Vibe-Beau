import React from 'react'
import BuyHeader from "./buyheader"
import CategoryPick from "./categorypick.js"
import ProductCards from "./ProductCards"
import Footer from "../layout/Footer.js"

const BuyFile = () => {
  return (
      <>
      <div>
        <BuyHeader/>
        <CategoryPick/>
        <ProductCards/>
        <Footer/>
      </div>
      </>
  )
}

export default BuyFile
