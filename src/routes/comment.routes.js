import { Router } from "express";
import {addComment, deleteComment, getVideoComments, updateComment} 
from '../controllers/comment.controller.js'; 
import { verifyJwt } from "../middlewares/auth.middleware.js";
 const router=Router();

 //router.route(verifyJwt);

router.route("/addComment/:videoId").post(verifyJwt, addComment)
router.route("/:videoId/:commentId").patch(verifyJwt, updateComment)
router.route("/:user/:videoId/:commentId").delete(verifyJwt, deleteComment)
router.route("/:videoId").get(verifyJwt, getVideoComments)

 export default router