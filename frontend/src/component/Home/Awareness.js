import React from 'react'
import { Component } from 'react';
import "../styles/Awareness.css"
import infoPic from '../images/info.jpg'

class Awareness extends Component{
    render(){
      return (
        <div>
          <div id= "learn" className="infoPane">
          <img src={infoPic} alt="" />
          </div>
        </div>
      );
    }
}

export default Awareness
