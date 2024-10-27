import mongoose from 'mongoose';
import {DB_NAME} from "../constants.js";

const connectDB=async()=>{
    try {
        const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        //For getting where database is connected  can get the host
        console.log(`Mongo connected !! DB Host: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MongoDB connection Eroor",error);
        process.exit(1);
    }
}

export default connectDB;