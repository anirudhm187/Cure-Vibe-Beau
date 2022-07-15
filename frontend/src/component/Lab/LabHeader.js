import React,{Component} from 'react'
import "../styles/labheader.css"
import {Link} from 'react-router-dom'
import Button from "react-bootstrap/Button"
import testImage from "../images/test.jpg"

class LabHeader extends Component{
  render(){
    return (
      <div className='labpage'>
        <div className="labContainer">
            <img src={testImage} alt="" />
            <div className="caption">
              <h4>Safe , reliable & Certified</h4>
            </div>
            <div className="slogan">
              <h1> Pathiological Lab tests.</h1>
            </div>
            <div className="bodyContent">
                <p>
                Book your required blood lab test and our phlebotomist from our nearby outlet will contact you regarding your blood sample collection. Get accurate test report within 24 hours of sample collection.</p>
            </div>
              <a href="#book">
            <Button>
              <span>BOOK NOW</span>
            </Button>
            </a>
        </div>
      </div>
    );
    }
}

export default LabHeader
