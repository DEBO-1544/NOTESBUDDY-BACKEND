import {Router} from "express";
import { Onboarding } from "../CONTROLLER/onboarding.controller.js";

const router = Router();
router.post("/",Onboarding)
export default router;