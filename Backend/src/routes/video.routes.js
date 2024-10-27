import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";

import { verifyJwt } from "../middlewares/auth.middleware.js";
import {
  uploadVideo,
  getAllVideo,
  updateVideo,
  deleteVideo,
} from "../controllers/video.controller.js";

const router = Router();

// Route for uploading videos
router.route("/uploadVideo").post(
    verifyJwt,
  upload.fields([
    {
      name: "videoFile",
      maxCount: 1,
    },
    {
      name: "thumbnail",
      maxCount: 1,
    },
  ]),
  uploadVideo
);

router.route("/get-allVideo").get(verifyJwt, getAllVideo);
router.route("/channel/video/:videoId").patch(
    verifyJwt,
  upload.fields([
    {
      name: "videoFile",
      maxCount: 1,
    },
    {
      name: "thumbnail",
      maxCount: 1,
    },
  ]),
  updateVideo
);
router.route("/delete/:videoId").delete(verifyJwt, deleteVideo);

export default router;