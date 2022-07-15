import React from 'react'
import "../styles/catalogue.css"
import Button from "react-bootstrap/Button"


const testmap = ({labData,handleClick}) => {
    console.log(labData);
  return (
    <>
        <div id ='book' className= "testCards">
             {labData.map((curr) => {
                return(
                    <>
                <div className='cardDisplay'>
                    <div className="testcard">
                        <div className='price'>
                            <span>₹ {curr.Price}</span>
                        </div>
                        <div className='testName'>
                                <h3>{curr.Name}</h3>
                        </div>
                        <div className="testdescription">
                            <p>{curr.Description}</p>
                        </div>
                        <div className="design">
                        <div className="circle"></div>
                        <Button onClick={() => handleClick(curr)}>
                            BOOK
                        </Button>
                        </div>
                    </div>
                </div>
                    </>
                );
        })}
    </div>
    </>
  );
};

export default testmap

