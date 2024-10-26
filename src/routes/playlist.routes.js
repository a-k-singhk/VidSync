import { Router } from "express";
import { verifyJwt } from "../middlewares/auth.middleware.js";
import {
  createPlaylist,
  getUserPlaylist,
  getPlaylistById,
  addVideoToPlaylist,
  updatePlaylist,
  deletePlaylist,
  removeVideoFromPlaylist,
} from "../controllers/playlist.controller.js";

const router = Router();
router.route("/createPlaylist").post(verifyJwt, createPlaylist);
router.route("/getUserPlaylist/:userId").get(verifyJwt, getUserPlaylist);
router.route("/getPlaylistById/:playlistId").get(verifyJwt, getPlaylistById);
router.route("/addVideoToPlaylist/:playlistId/:videoId").patch(verifyJwt, addVideoToPlaylist);
router.route("/updatePlaylist/:playlistId").patch(verifyJwt, updatePlaylist);
router.route("/deletePlaylist/:playlistId").delete(verifyJwt, deletePlaylist);
router.route("/removeVideoFromPlaylist/:playlistId/:videoId").patch(verifyJwt, removeVideoFromPlaylist)
export default router;