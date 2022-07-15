import React from 'react'
import "../styles/buyheader.css"
import Button from "react-bootstrap/Button"
import buyImage from "../images/buyPic.jpg"

const buyheader = () => {
  return (
    <>
        <div className='buypage'>
        <div className="buycontainer">
            <img src={buyImage} alt="" />
            <div className="caption">
              <h4>Flat 5% Off on all products + free delivery</h4>
            </div>
            <div className="slogan">
              <h1>Buy Medicines and heathcare devices.</h1>
            </div>
            <div className="bodyContent">
                <p>
                Shop from the largest online pharmacy.</p>
            </div>
            <Button>
              <span>BOOK NOW</span>
            </Button>
        </div>
      </div>
    </>
  )
}

export default buyheader
