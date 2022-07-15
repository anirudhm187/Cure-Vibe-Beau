import React from 'react'
import Button from "react-bootstrap/Button";
import Dropdown from 'react-bootstrap/Dropdown'
import '../styles/finddonor.css'
import DonorMain from './DonorShow.js'

const finddonor = () => {
  return (
    <>
    <div className="findSection" id="find">
      <h3>Find Blood Donor</h3>
      <div className="picker">
      {/* <Dropdown>
  <Dropdown.Toggle variant="success" className='selectblood' id="dropdown-basic">
    Select Blood Group
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">A+</Dropdown.Item>
    <Dropdown.Item href="#/action-2">A-</Dropdown.Item>
    <Dropdown.Item href="#/action-3">B+</Dropdown.Item>
    <Dropdown.Item href="#/action-4">B-</Dropdown.Item>
    <Dropdown.Item href="#/action-5">O+</Dropdown.Item>
    <Dropdown.Item href="#/action-6">O-</Dropdown.Item>
    <Dropdown.Item href="#/action-7">AB+</Dropdown.Item>
    <Dropdown.Item href="#/action-8">AB-</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown> */
}
    <DonorMain/>
      </div>
      </div>
    </>
  )
}

export default finddonor
