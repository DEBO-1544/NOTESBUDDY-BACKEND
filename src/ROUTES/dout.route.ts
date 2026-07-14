import{ Router} from "express";
import {Dout} from "../CONTROLLER/dout.controller.ts";

const router= Router();

router.post("/",Dout)

export default router;


