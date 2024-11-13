const express = require("express");
require("./db");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(cors());
const jwt= require("jsonwebtoken");
// app.use(bodyParser.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log("GOT HIT")
  // console.log(req)
  return next()
})

SECRET = "SECRETCODETSFDATA"

const multer = require('multer');
const BoppForm = require("./Models/BoppForm");
const { STATUS_CODES, ROLES } = require("./globalCOnstants");
const boppUser = require("./Models/boppUser");
const { uploadBufferToS3, generatePresignedUrl } = require("./aws-service");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });; // Define a folder for storing uploaded files


const uploadFields = upload.fields([
  { name: 'image', maxCount: 50 },
  { name: 'audio', maxCount: 10 },
  { name: 'video', maxCount: 10 }
]);
// Middleware to parse JSON data in fields
app.use(bodyParser.json());

app.post("/admin/api/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const userDetails = await boppUser.findOne({ username }).lean();
    
    if (!userDetails) {
      return res.status(STATUS_CODES.NOT_FOUND).json({ message: "NO such user exists" });
    }
    if (userDetails.password != password) {
      return res.status(STATUS_CODES.NOT_AUTHORIZED).json({ message: "Password did not match" });
    }
    delete userDetails.password;
    userDetails.isAdmin= userDetails.role == ROLES.ADMIN ? true : false
    const tokenData = {
      username,
      isAdmin: userDetails.role == ROLES.ADMIN ? true : false
    }
    const token = jwt.sign(tokenData, SECRET);
    return res.status(STATUS_CODES.OK).json({ message: "User logged in successfully", userDetails, token })
  } catch (error) {
    console.error("Error occured while loggin in User", error);
    return res.status(STATUS_CODES.BAD_REQUEST).json({ message: "Error occured while loggin in user", error });
  }
})

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Define a route to handle the form submission
app.post('/api/bopp-form/submit-form',
  uploadFields,
  // upload.array('files', 12),
  //  upload.fields([
  // { name: 'imageFiles', maxCount: 100 },
  // { name: 'audioFiles', maxCount: 10 },
  // { name: 'videoFiles', maxCount: 10 },
  // ] 
  async (req, res) => {
    try {

      // ServerlessApplicationRepository
      const imageFiles = req.files['image'] || [];
      const audioFiles = req.files['audio'] || [];
      const videoFiles = req.files['video'] || [];
      const uploadingData=[];
      console.log({imageFiles, audioFiles, videoFiles})
      // console.log({...req.files})
      // Retrieve JSON data from fields
      const dateObj = JSON.parse(req.body.dateObj);
      const personnelObj = JSON.parse(req.body.personnelObj);
      const extrudersObj = JSON.parse(req.body.extrudersObj);
      const dosingSection = JSON.parse(req.body.dosingSection);
      const airKnife = JSON.parse(req.body.airKnife);
      const castingUnit = JSON.parse(req.body.castingUnit);
      const mdo = JSON.parse(req.body.mdo);
      const tdo = JSON.parse(req.body.tdo);
      const prs = JSON.parse(req.body.prs);
      const winder = JSON.parse(req.body.winder);
      const visualPhysicalDefects = JSON.parse(req.body.visualPhysicalDefects);


      for (const images of imageFiles){
        const filename= `${new Date()}_${images.originalname}`
        if(images.originalname.includes("extruder")){
          extrudersObj.image.push(filename);
        }
        else if(images.originalname.includes("dosing")){
          dosingSection.image.push(filename);
        }
        else if(images.originalname.includes("knife")){
          airKnife.image.push(filename);
        }    
        else if(images.originalname.includes("casting")){
          castingUnit.image.push(filename);
        }   
        else if(images.originalname.includes("mdo")){
          mdo.image.push(filename);
        }  
        else if(images.originalname.includes("tdo")){
          tdo.image.push(filename);
        }  
        else if(images.originalname.includes("winder")){
          winder.image.push(filename);
        } 
        else if(images.originalname.includes("prs")){
          prs.image.push(filename);
        } 
        else if(images.originalname.includes("physical")){
          visualPhysicalDefects.image.push(filename);
        }   
        uploadingData.push(uploadBufferToS3(images.buffer,filename));
      }

      for (const audios of audioFiles){
        const filename= `${new Date()}_${audios.originalname}`
        if(audios.originalname.includes("extruder")){
          extrudersObj.audio=filename
        }
        else if(audios.originalname.includes("dosing")){
          dosingSection.audio=filename
        }
        else if(audios.originalname.includes("knife")){
          airKnife.audio=filename
        }    
        else if(audios.originalname.includes("casting")){
          castingUnit.audio=filename
        }   
        else if(audios.originalname.includes("mdo")){
          mdo.audio=filename
        }  
        else if(audios.originalname.includes("tdo")){
          tdo.audio=filename
        }  
        else if(audios.originalname.includes("winder")){
          winder.audio=filename
        } 
        else if(audios.originalname.includes("prs")){
          prs.audio=filename
        } 
        else if(audios.originalname.includes("physical")){
          visualPhysicalDefects.audio=filename
        }
        uploadingData.push(uploadBufferToS3(audios.buffer,filename));
      }

      for (const videos of videoFiles){
        const filename= `${new Date()}_${videos.originalname}`
        if(videos.originalname.includes("extruder")){
          extrudersObj.video=filename
        }
        else if(videos.originalname.includes("dosing")){
          dosingSection.video=filename
        }
        else if(videos.originalname.includes("knife")){
          airKnife.video=filename
        }    
        else if(videos.originalname.includes("casting")){
          castingUnit.video=filename
        }   
        else if(videos.originalname.includes("mdo")){
          mdo.video=filename
        }  
        else if(videos.originalname.includes("tdo")){
          tdo.video=filename
        }  
        else if(videos.originalname.includes("winder")){
          winder.video=filename
        } 
        else if(videos.originalname.includes("prs")){
          prs.video=filename
        } 
        else if(videos.originalname.includes("physical")){
          visualPhysicalDefects.video=filename
        }
        uploadingData.push(uploadBufferToS3(videos.buffer,filename));
      }
      await Promise.all(uploadingData);


      await BoppForm.create({ dateObj, personnelObj, extrudersObj, dosingSection, airKnife, castingUnit, mdo, tdo, prs, winder, visualPhysicalDefects });
      // Retrieve uploaded files
      
      
      // Log the received data and files (for debugging purposes)
      console.log('Date Object:', dateObj);
      console.log('Personnel Object:', personnelObj);
      console.log('Extruders Object:', extrudersObj);
      console.log('Dosing Section:', dosingSection);
      console.log('Air Knife:', airKnife);
      console.log('Casting Unit:', castingUnit);
      console.log('MDO:', mdo);
      console.log('TDO:', tdo);
      console.log('PRS:', prs);
      console.log('Winder:', winder);
      console.log('Visual Physical Defects:', visualPhysicalDefects);
      console.log('Uploaded Image Files:', imageFiles);
      console.log('Uploaded Audio Files:', audioFiles);
      console.log('Uploaded Video Files:', videoFiles);

      // TODO: Process and store JSON data and files as needed
      // Example: save data to a database or cloud storage

      return res.status(200).json({ message: 'Form submitted successfully' });
    } catch (error) {
      console.error('Error processing form data:', error);
      res.status(500).json({ error: 'Failed to process form data' });
    }
  });

app.get("/admin/api/get-logs", async (req, res) => {
  try {
    const logsDetailsInfo = await BoppForm.find({}, { dateObj: 1, personnelObj: 1 }).sort({_id:-1}).lean();
    console.log({ logsDetailsInfo });
    return res.status(STATUS_CODES.OK).json({ logsDetailsInfo });
  } catch (error) {
    console.error("Error occured while retriving logs", error);
    return res.status(STATUS_CODES.BAD_REQUEST).json({ message: "Error occured while retriving logs", error });
  }
})

app.get("/admin/api/get-details",async(req,res)=>{
  try {
    const {docId}= req.query;
    const docDetails= await BoppForm.findById(docId).lean();
    if (!docDetails) {
      return res.status(404).json({ message: 'Document not found' });
    }

    updateWithPresignedUrls(docDetails);
    
    return res.status(STATUS_CODES.OK).json({ docDetails });
  } catch (error) {
    console.error("Error occured while retriving logs", error);
    return res.status(STATUS_CODES.BAD_REQUEST).json({ message: "Error occured while retriving logs", error });
  }
})



const updateWithPresignedUrls = (obj) => {
  for (const key in obj) {
    if (Array.isArray(obj[key]) && key === 'image') {
      // Update each image URL in the array with a presigned URL
      obj[key] = obj[key].map((img) => generatePresignedUrl(img));
    } else if (key === 'audio' && obj[key]) {
      // Update audio URL with a presigned URL
      obj[key] = generatePresignedUrl(obj[key]);
    } else if (key === 'video' && obj[key]) {
      // Update video URL with a presigned URL
      obj[key] = generatePresignedUrl(obj[key]);
    } else if (typeof obj[key] === 'object' && obj[key] !== null) {
      // Recursively call the function for nested objects
      updateWithPresignedUrls(obj[key]);
    }
  }
};



// Start the server
const port = process.env.PORT;
console.log({ port });

const server =app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
server.timeout = 240000;