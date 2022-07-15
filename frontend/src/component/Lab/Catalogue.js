import React,{useState} from 'react'
import labtests from "../data/labTestApi"
import "../styles/catalogue.css"
import Testmap from './testmap.js'



const Catalogue = ({handleClick}) => {
    const [labData, setLabData] = useState(labtests);
  return (
    <>
      <Testmap labData = {labData} handleClick={handleClick}/>
     </>
  );
};

export default Catalogue
