import {prisma} from "../DB/db.js"
import type {Request, Response} from "express"
import { uploadFile } from "../UTILITES/supabase.upload.js";
import { UploadedUrl } from "../UTILITES/supabase.urlink.js";
const uploadNotes = async (req: Request, res: Response) => {
 try{
    const{title,subject,description,forsem,forstream,uploaderId}=req.body
    
    
    if(!title || !subject || !forsem || !forstream|| !req.file){
        return res.status(400).json({message:"All fields are required"})
    }
      const isuploded= await uploadFile(req.file!)
      
       
      const publicurl= await UploadedUrl(isuploded)

   
        const Notes_upload= await prisma.note.create({
             data:{
                title,
                subject,
                description,
                forsem,
                forstream,
                fileurl:publicurl,
                uploaderId,

             },
        })



 return res.status(201).json({message:"Notes uploaded successfully",Notes:Notes_upload})

 }catch(err){

    return res.status(500).json({error:err})

 }

}
export {uploadNotes}