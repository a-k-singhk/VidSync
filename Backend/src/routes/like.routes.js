import { Router } from "express";
import { getLikesVideo, toggleLike} from "../controllers/like.controller.js"

import { verifyJWT } from "../middlewares/auth.middleware.js";

const router=Router();

//router.use(verifyJWT);

router.route("/:type/:id").patch(verifyJWT, toggleLike)
router.route("/getLikesVideo").get(verifyJWT, getLikesVideo)

export default router
