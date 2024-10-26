import { Router } from "express";
import { verifyJwt } from "../middlewares/auth.middleware.js";
import { 
    getSubscribedChannels, 
    getuserChannelSubscribers, 
    toogleSubscription 
} from '../controllers/subscription.controller.js';

const router=Router();
router.route("/c/:channelId").patch(verifyJwt, toogleSubscription);

router.route("/s/:channelId").get(verifyJwt, getuserChannelSubscribers);

router.route("/:subscriberId").get(verifyJwt, getSubscribedChannels);


export default router