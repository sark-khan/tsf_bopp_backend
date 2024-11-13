const express = require("express");
const { STATUS_CODES } = require("../../globalCOnstants");
const router = express.Router();

router.post("/add-form-data", async(req,res)=>{
    try {
        
    } catch (error) {
        console.error("Error has occured in the adding form data",error);
        return res.status(STATUS_CODES.SERVER_ERROR).json({message:"Error occured while adding form data", error})
    }
})

module.exports=router;