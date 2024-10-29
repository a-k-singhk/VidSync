import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app=express();

//Configure the cors
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  }));  
//Middleware to cofigure request
app.use(express.json({limit:"16kb"}));
//Configure if the data is coming from the URL
//Extended is used to give more level of nested object means object inside object
app.use(express.urlencoded({extended:true,limit:"16kb"}));
//Middleware to store static files
app.use(express.static("public"))
//Store the secure cookies in users browser
app.use(cookieParser());

//ROutes import
import userRouter from './routes/user.routes.js'
import videoRouter from "./routes/video.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js";
import commentRouter from "./routes/comment.routes.js";
import likeRouter from "./routes/like.routes.js";
import tweetRouter from "./routes/tweet.routes.js";
import playlistRouter from "./routes/playlist.routes.js";


//routes declration
app.use("/api/v1/users",userRouter);
app.use("/api/v1/videos", videoRouter);
app.use("/api/v1/subscription", subscriptionRouter);
app.use("/api/v1/comments", commentRouter);
app.use("/api/v1/like", likeRouter);
app.use("/api/v1/tweet", tweetRouter);
app.use("/api/v1/playlist", playlistRouter);



export {app}