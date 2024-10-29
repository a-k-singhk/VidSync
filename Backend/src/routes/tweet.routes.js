import { Router } from "express";
import { createTweet, deleteTweet, getuserTweet, updateTweet } from '../controllers/tweet.controller.js'

import { verifyJWT } from "../middlewares/auth.middleware.js";

const router=Router();

router.use(verifyJWT);

router.route("/createTweet").post(verifyJWT, createTweet);
router.route("/delete/:tweetId").delete(verifyJWT, deleteTweet);
router.route("/updateTweet/:tweetId").patch(verifyJWT, updateTweet);
router.route("/getUserTweets/:userId").get(verifyJWT, getuserTweet);

export default router