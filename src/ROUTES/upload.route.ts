import  {Router }from "express";
console.log("loaded")
import { uploadNotes } from "../CONTROLLER/uploadnotes.controller.ts";
import upload from "../MIDDLEWEAR/multer.middlewear.ts";

const router = Router();
router.post("/",upload.single("pdf"),uploadNotes)
export default router;