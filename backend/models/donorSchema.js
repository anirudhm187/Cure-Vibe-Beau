const mongoose= require("mongoose");
const donorSchema = {
    donorname :{
        type: String,
        required: true
    },
    phone :{
        type: Number,
        required: true
    },
    bloodgrp :{
        type: String,
        required: true
    },
}
const DONOR = mongoose.model("DONOR", donorSchema);
module.exports = DONOR;