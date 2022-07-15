const express = require("express");
const donorrouter = express.Router();
const DONOR = require("../models/donorSchema.js");

donorrouter.route("/create").post((req,res)=>{
    const donorname = req.body.donorname;
    const number = req.body.number;
    const bloodgrp = req.body.bloodgrp;
    const newDONOR = new DONOR({
        donorname,
        number,
        bloodgrp
    });  
})
module.exports = donorrouter;