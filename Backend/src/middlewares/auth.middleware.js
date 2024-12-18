import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from 'jsonwebtoken';


export const verifyJWT=asyncHandler(async(req,res,next)=>{
    try {
        //console.log(req.cookies.accessToken);
        //console.log(req.header("Authorization"));
        const token=req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ","")
        console.log("Cookies:", req.cookies);
        console.log(req.header("Authorization"));
        console.log(token);
        if(!token){
            throw new ApiError(401,"Unauthorised Request");
        }
    
        const decodedToken= jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
    
        const user=await User.findById(decodedToken?._id)
        .select("-password -refreshToken")
    
        if(!user){
            throw new ApiError(401,"Invalid Access Token");
        }
        req.user=user;
        next()
    } catch (error) {
        throw new ApiError(401,error?.message || "Invalid acess token");
    }
})