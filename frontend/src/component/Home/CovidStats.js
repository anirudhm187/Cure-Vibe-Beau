import React from 'react'
import { Component } from 'react';
import "../styles/CovidStats.css";
import virusPic from "../images/virus.jpg"
import bedPic from "../images/bed.jpg"
import heartPic from "../images/heart.jpg"
import skullPic from "../images/skull.jpg"

class CovidStats extends Component{
  constructor(props) {
    super(props);

    this.state = {
        items: [],
        DataisLoaded: false
    };
}

componentDidMount() {
    fetch("https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true")
    .then((res) => res.json())
    .then((json) => {
        this.setState({
            items: json,
            DataisLoaded: true
        });
    })
}

render(){
    const { DataisLoaded, items } = this.state;
    console.log(items);
    return ( 
        <>
        <div className="stats">
            <h4>Coronavirus statistics</h4>
            <h6>Data Refreshes Every 24 Hours</h6>
            <div className="lists">
              <div className="list-item">
                <img src = {virusPic} alt="" />
                <h4 style={{color: "red"}}>{items.totalCases}</h4>
                <p>Total Cases</p>
              </div>
              <div className="list-item">
                <img src = {bedPic} alt="" />
                <h4 style={{color: "#1189F9"}}>{items.activeCases}</h4>
                <p>Active Cases</p>
              </div>
              <div className="list-item">
                <img src = {heartPic} alt="" />
                <h4 style={{color: "green"}}>{items.recovered}</h4>
                <p>Recovered Cases</p>
              </div>
              <div className="list-item">
                <img src = {skullPic} alt="" />
                <h4 style={{color: "gray"}}>{items.deaths}</h4>
                <p>Deaths</p>
              </div>
            </div>
        </div>
        </>
    );
}
}

export default CovidStats;
