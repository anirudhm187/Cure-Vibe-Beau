import React from 'react'
import {Link} from 'react-router-dom'
import { RiTestTubeFill} from 'react-icons/ri';
import { BiHomeSmile, BiDonateBlood } from 'react-icons/bi';
import {GiMedicines} from 'react-icons/gi';
import {BsCartCheck} from 'react-icons/bs';
import {CgProfile} from 'react-icons/cg';
import {FcGoogle} from 'react-icons/fc';
import logo from "../images/logoo.jpg"
import "../styles/nav.css"

const Navbar = () => {
  return (
    <div className ="nav">
        <div className ="logo">
            <Link to= "/">
                <img src={logo} alt="" />
            </Link>
        </div>
            <Link className ="navlinks" to="/"><BiHomeSmile className="icon"/>  Home</Link>
            <Link className ="navlinks" to= "/buy"><GiMedicines  className="icon"/>  Buy</Link>
            <Link className ="navlinks" to="/test"><RiTestTubeFill  className="icon"/>  Book Test</Link>
            <Link className ="navlinks" to="/donor"><BiDonateBlood className="icon"/>  Find Donor</Link>
            <Link className ="navlinks" to="/cart"><BsCartCheck className="icon"/>  Cart</Link>
            <Link className ="navlinks" to="/profile"><CgProfile className="icon"/>  Profile</Link>
            <Link className ="navlinks" to="/login"><FcGoogle className="icon"/>  Log In</Link>
    </div>
  )
}

export default Navbar
