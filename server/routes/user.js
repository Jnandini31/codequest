import express from "express"
import {login, signup} from '../controllers/auth.js'
import { getallusers,updateprofile } from "../controllers/user.js";
import auth from "../middleware/auth.js"
const router=express.Router();


router.post("/singup",signup);
router.post("/login",login);

router.get("/getallusers",getallusers);

router.patch("/update/:id",auth,updateprofile);



export default router