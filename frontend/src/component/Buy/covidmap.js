import React from 'react'
import "../styles/ProductCards.css"
import Button from "react-bootstrap/Button"

const covidmap = ({covidData}) => {
  return (
    <>
      <div className="cardContainer">
        <div className="medcineCategory">
          <h3>Covid - 19 Essentials</h3>
          <div className="productDisplay">
            {covidData.map((curr)=>{
                console.log(covidData);
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
  );
};

export default covidmap





        // <div className="medCard">
        //       <div className="productPic">
        //         <img src="" alt="" />
        //       </div>
        //       <div className="medName">
        //         <h4>Ostocalcium Plus (Vit D3 & calcium) Chewable Tablet</h4>
        //       </div>
        //       <div className="medDetail">
        //         <h6>( Bottle of 30 Tablets)</h6>
        //       </div>
        //       <div className="down">
        //       <div className="medPrice">
        //         <h4>MRP :</h4>
        //         <h4 className='slash'>₹ 85</h4>
        //         <h3>₹ 80</h3>
        //       </div>
        //       <Button>
        //         <span>ADD</span>
        //       </Button>
        //       </div>
        //     </div>