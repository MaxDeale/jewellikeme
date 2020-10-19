import express from "express";
const router = express.Router();
import {
  getUsers,
  authUser,
  getUserProfile,
  registerUser,
} from "../controllers/userController.js";
import { protect } from "../middleware/authmiddleware.js";

router.route("/").get(getUsers);

router.post("/login", authUser);
router.route("/").post(registerUser);
router.route("/profile").get(protect, getUserProfile);

export default router;
