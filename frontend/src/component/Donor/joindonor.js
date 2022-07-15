import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
import Dropdown from 'react-bootstrap/Dropdown'
import axios from "axios"
import '../styles/joindonor.css'

const Joindonor = () => {
  const [input, setInput] = useState({
    donorname:'',
    number:'',
    bloodgrp:'',
  })

  function handleChange (event) {
      const {name, value}= event.target;
          setInput (prevInput => {
          return {
            ...prevInput,
            [name]: value
            
          }
        })
  }

  function handleClick(event){
    event.preventDefault();
    console.log(input);
    alert("Donor will be Added soon !")
    const newDonor ={
      donorname: input.donorname,
      number: input.number,
      bloodgrp: input.bloodgrp,
    }
    axios.post('http://localhost:5000/create',newDonor)
  }
  return (
    <>
    <div className='formpart' id="join">
    <h3>Volunteer / Refer a Donor</h3>
  <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="text" placeholder="Name of Donor" onChange={handleChange} name ="donorname" value={input.donorname}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="number" placeholder="Donor's Contact Number" onChange={handleChange} name ="number" value={input.number} />
  </Form.Group>
  <Form.Group className=" mb-3" controlId="formBasicEmail">
    <Form.Control className='pickgrp' type="text" placeholder="Donor's Blood Group (In Blocks)" onChange={handleChange} name ="bloodgrp" value={input.bloodgrp} />
  </Form.Group>
  {/* <Dropdown>
  <Dropdown.Toggle variant="success" className='selectbutt' id="dropdown-basic">
    Select Blood Group
  </Dropdown.Toggle>

  <Dropdown.Menu onChange={handleChange} name ="bloodgrp">
    <Dropdown.Item href="#/A+" value="A+">A+</Dropdown.Item>
    <Dropdown.Item href="#/A-">A-</Dropdown.Item>
    <Dropdown.Item href="#/B+">B+</Dropdown.Item>
    <Dropdown.Item href="#/B-">B-</Dropdown.Item>
    <Dropdown.Item href="#/O+">O+</Dropdown.Item>
    <Dropdown.Item href="#/O-">O-</Dropdown.Item>
    <Dropdown.Item href="#/AB+">AB+</Dropdown.Item>
    <Dropdown.Item href="#/AB-">AB-</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown> */}
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Donor is not on any sort of  medication/ diabetic/ and has systolic and diastolic blood pressure levels under normal range." />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Donor gives their consent for public display of their contact details." />
  </Form.Group>
  <Button variant="primary" className='joinbutton' type="submit" onClick={handleClick}>
    Join Hands 🤝
  </Button>
</Form>
</div>
    </>
  )
}

export default Joindonor




{/* <Dropdown.Menu>
<Dropdown.Item href="#/A+">A+</Dropdown.Item>
<Dropdown.Item href="#/A-">A-</Dropdown.Item>
<Dropdown.Item href="#/B+">B+</Dropdown.Item>
<Dropdown.Item href="#/B-">B-</Dropdown.Item>
<Dropdown.Item href="#/O+">O+</Dropdown.Item>
<Dropdown.Item href="#/O-">O-</Dropdown.Item>
<Dropdown.Item href="#/AB+">AB+</Dropdown.Item>
<Dropdown.Item href="#/AB-">AB-</Dropdown.Item>
</Dropdown.Menu> */}