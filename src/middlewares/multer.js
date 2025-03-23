import multer from "multer";



const storage = multer.diskStorage({
    destination: function (req, file, cb) {    // cp = callback 
      cb(null, './public/uploads')
    },
    filename: function (req, file, cb) {

        // // // generating a unique name for the file // // //
    //   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    //   cb(null, file.fieldname + '-' + uniqueSuffix)

    cb(null, file.originalname);
    }
  })
  
export const upload = multer({ 
    storage,
})