const express = require("express");
const router = express.Router();

router.post("/login", async(req,res)=>{
    try{
        

    }catch(error){
        console.error("Error has occured in Login API", error);
        return res.status(STATUS_CODES.SERVER_ERROR).json({message: "Error has occured in login api", error})
    }
})

module.exports=router;