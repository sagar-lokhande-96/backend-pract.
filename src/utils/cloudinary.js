import { v2 as cloudinary } from 'cloudinary';

 // Configuration
 cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_CLOUD_API_KEY, 
    api_secret: process.env.CLOUDINARY_CLOUD_API_SECRET
});



// Upload an image
const uploadOnCloudinary = async (localFilePath)=>{
    try {
        if(!filPath){
            return null;
        }
        // uploading files on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type: "auto"
        });

        // file has been uploaded successfully
        console.log("file uploaded successfully on ",response.url);
        return response;

    } catch (error) {
        fs.unlinkSync(localFilePath);  // removes the locally saved temporary files as the upload operation got failed 
        return null;
    }
}