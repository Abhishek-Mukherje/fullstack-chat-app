import express from "express";
import { checkAuth, login, logout, signup, updateProfile } from "../controllers/authcontrollerr.js";
import { protectRoute } from "../middleware/authmidware.js";

const router = express.Router();

router.post("/login", login);
router.post("/signup", signup );  
router.post("/logout", logout );
router.put("/update-profile", protectRoute,updateProfile );
router.get("/check", protectRoute,checkAuth)
export default router;