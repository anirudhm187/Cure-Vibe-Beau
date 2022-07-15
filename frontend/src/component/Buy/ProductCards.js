import React, {useState} from 'react'
import "../styles/ProductCards.css"
import Covidess from "../data/covidEss.js"
import Cough from "../data/coughCold.js"
import Stomach from "../data/stomachCare.js"
import Pain from "../data/painRelief.js"
import Skin from "../data/skinCare.js"
import Health from "../data/healthSupp.js"
import Eye from "../data/eyeCare.js"
import Devices from "../data/healthDevices.js"
import CovidMap from "./covidmap"
import CoughMap from "./coughmap.js"
import StomachMap from "./stomachmap.js"
import PainMap from "./painmap.js"
import SkinMap from "./skinmap.js"
import HealthMap from"./healthmap.js"
import EyeMap from "./eyemap.js"
import DeviceMap from "./devicemap.js"

const ProductCards = () => {
  const[covidData,setCovidData]= useState(Covidess);
  const[coughData,setCoughData]= useState(Cough);
  const[stomachData,setStomachData]= useState(Stomach);
  const[PainData,setPainData]= useState(Pain);
  const[skinData,setskinData]= useState(Skin);
  const[healthData,sethealthData]= useState(Health);
  const[eyeData,setEyeData]= useState(Eye);
  const[deviceData,setDeviceData]= useState(Devices);
  return (
    <>
      <CovidMap covidData = {covidData}/>
      <CoughMap coughData = {coughData}/>
      <StomachMap stomachData = {stomachData}/>
      <PainMap PainData = {PainData}/>
      <SkinMap skinData = {skinData}/>
      <HealthMap healthData = {healthData}/>
      <EyeMap eyeData = {eyeData}/>
      <DeviceMap deviceData = {deviceData}/>
    </>
  );
};

export default ProductCards
