import { Router } from "express";
import {addComment, deleteComment, getVideoComments, updateComment} 
from '../controllers/comment.controller.js'; 
import { verifyJWT } from "../middlewares/auth.middleware.js";
 const router=Router();

 //router.route(verifyJWT);

router.route("/addComment/:videoId").post(verifyJWT, addComment)
router.route("/:videoId/:commentId").patch(verifyJWT, updateComment)
router.route("/:user/:videoId/:commentId").delete(verifyJWT, deleteComment)
router.route("/:videoId").get(verifyJWT, getVideoComments)

 export default router