import React, { Component } from 'react'
import Button from "react-bootstrap/Button";
import maskImage from "../images/mask.jpg"
import "../styles/homeheader.css"

//const HomeHeader = () => {
class HomeHeader extends Component{
  render(){
    return (
      <div>
        <div className="Homecontainer">
            <img src={maskImage} alt="" />
            <div className="caption">
              <h4>Covid-19 Awareness</h4>
            </div>
            <div className="slogan">
              <h1> Stay Safe. Stay Home.</h1>
            </div>
            <div className="bodyContent">
                <p>
                The novel corona virus disease 2019 (COVID-19) presents an important and urgent threat to global health and its effect is expected to get even worse in the middle- and low-income countries where the health system is weak and fragile
                .</p>
            </div>
            <a href="#learn">
            <Button>
              <span>LEARN MORE</span>
            </Button>
            </a>
        </div>
      </div>
    );
    }
}

export default HomeHeader;
