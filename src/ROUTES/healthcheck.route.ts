import { Router } from "express";
import { healthcheck } from "../CONTROLLER/healthcheck.controller.ts";

const router = Router();

router.get("/", healthcheck);

export default router;