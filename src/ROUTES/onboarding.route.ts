import {Router} from "express";
import { Onboarding } from "../CONTROLLER/onboarding.controller.ts";

const router = Router();
router.post("/",Onboarding)
export default router;