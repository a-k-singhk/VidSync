import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { 
    getSubscribedChannels, 
    getuserChannelSubscribers, 
    toogleSubscription 
} from '../controllers/subscription.controller.js';

const router=Router();
router.route("/c/:channelId").patch(verifyJWT, toogleSubscription);

router.route("/s/:channelId").get(verifyJWT, getuserChannelSubscribers);

router.route("/:subscriberId").get(verifyJWT, getSubscribedChannels);


export default router