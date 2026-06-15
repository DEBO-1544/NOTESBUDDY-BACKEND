import  Router from "express";
import { uploadNotes } from "../CONTROLLER/uploadnotes.controller.js";
import upload from "../MIDDLEWEAR/multer.middlewear.js";

const router = Router();
router.post("/",upload.single("pdf"),uploadNotes)
export default router;