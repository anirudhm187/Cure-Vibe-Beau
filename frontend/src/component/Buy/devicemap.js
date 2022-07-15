import React from 'react'
import "../styles/ProductCards.css"
import Button from "react-bootstrap/Button"

const devicemap = ({deviceData}) => {
    return (
        <>
         <div className="cardContainer">
            <div className="medcineCategory">
              <h3>Healthcare devices</h3>
              <div className="productDisplay">
                {deviceData.map((curr)=>{
                    console.log(deviceData);
                    return(
                        <>
                        <div className="medCard">
                  <div className="productPic">
                    <img src={curr.image} alt="" />
                  </div>
                  <div className="medName">
                    <h4>{curr.Name}</h4>
                  </div>
                  <div className="medDetail">
                    <h6>{curr.Quantity}</h6>
                  </div>
                  <div className="down">
                  <div className="medPrice">
                    <h4>MRP :</h4>
                    <h4 className='slash'>₹ {curr.CutPrice}</h4>
                    <h3>₹ {curr.Price}</h3>
                  </div>
                  <Button>
                    <span>ADD</span>
                  </Button>
                  </div>
                </div>
                        </>
                    );
                })}
                </div>        
            </div>
          </div> 
        </>
      )
}

export default devicemap
