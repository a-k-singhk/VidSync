import { Router } from "express";
import { getLikesVideo, toggleLike} from "../controllers/like.controller.js"

import { verifyJwt } from "../middlewares/auth.middleware.js";

const router=Router();

//router.use(verifyJwt);

router.route("/:type/:id").patch(verifyJwt, toggleLike)
router.route("/getLikesVideo").get(verifyJwt, getLikesVideo)

export default router
