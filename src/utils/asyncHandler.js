// 2nd way using Promise
const asyncHandler = (requestHandler) =>{
    (req,res,next) =>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
    }
}


export {asyncHandler}


// 1st way using try-catch block

// const asyncHandler = (fn) => async (req,res,next)=>{
//     try {
//         await fn(req,res,next);
//         console.log("hello");
//     } catch (err) {
//         res.status(err.code || 500).json({
//             message: err.message,
//             success: false
//         })
//     }
// }