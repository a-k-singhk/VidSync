import { Router } from "express";
import { createTweet, deleteTweet, getuserTweet, updateTweet } from '../controllers/tweet.controller.js'

import { verifyJwt } from "../middlewares/auth.middleware.js";

const router=Router();

router.use(verifyJwt);

router.route("/createTweet").post(verifyJwt, createTweet);
router.route("/delete/:tweetId").delete(verifyJwt, deleteTweet);
router.route("/updateTweet/:tweetId").patch(verifyJwt, updateTweet);
router.route("/getUserTweets/:userId").get(verifyJwt, getuserTweet);

export default router