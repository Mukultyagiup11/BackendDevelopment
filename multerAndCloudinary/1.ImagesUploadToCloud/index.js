require('dotenv').config();
const express=require('express');
const multer=require('multer');
const mongoose =require('mongoose')
const cloudinary=require('cloudinary').v2;
const {CloudinaryStorage}=require('multer-storage-cloudinary')
const app=express();


//!Connect to mongoose
mongoose.connect('').then(()=>{
    console.log('Connected to MongoDB');
}).catch((err)=>{console.log(err)});

//!ImageSchema
const imageSchema=new mongoose.Schema({
    url:String,
    public_id:String
})
//!ImageModel
const Image=mongoose.model('Image',imageSchema);

//! Configure Cloudinary
cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
})
//! Configure Multer Storage cloudinary
const storage=new CloudinaryStorage({
   cloudinary,
    params:{
        folder:'image-folder',
        format:async (req,file)=>'png',
        public_id:(req,file)=>file.fieldname+'_'+Date.now(),
        transformation:[{
            width:800,
            height:600,
            crop:'fill'
        }]
    }
})
//! Configure Multer
const upload= multer({
    storage,
    limits:1024*1024*5,//?5MB LIMIT
    fileFilter:(req,file,cb)=>{
        if(file.mimetype.startsWith('image/')){
            cb(null,true)
        }else{
            cb(new Error('Only image files are allowed!'),false);
        }
    }
});
//!Upload Route
app.post('/upload',upload.single('file'),async (req,res)=>{
    console.log(req.file);
    const upLoaded=await Image.create({
        url:req.file.path,
        public_id:req.file.filename
    })
    res.json({
        message:'Image uploaded successfully',
        upLoaded
    })
})
//!get all images
app.get('/images',async (req,res)=>{
try {
    const images=await Image.find();
    res.json({
        message:'All images fetched successfully',
        images
    })
} catch (error) {
    res.json(error);
}
})


//start the server
const PORT=3002;
app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`);   
});