import {prisma} from "../DB/db.ts"
import type {Request, Response} from "express"
import { uploadFile } from "../UTILITES/supabase.upload.ts";
import { UploadedUrl } from "../UTILITES/supabase.urlink.ts";
import { ErrorApi } from "../UTILITES/error.api.ts";
import { SucessApi } from "../UTILITES/sucess.api.ts";
const uploadNotes = async (req: Request, res: Response) => {
 try{
    const{title,subject,description,forsem,forstream,uploaderId}=req.body
    
    
    if(!title || !subject || !forsem || !forstream|| !req.file){
        return res.status(400).json(new ErrorApi("All fields are required", 400, null))
    }

    // uploaded file 
      const isuploded= await uploadFile(req.file!)
      
       // uploaded file url link
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

return res.status(201).json(new SucessApi("Notes uploaded successfully", 201, Notes_upload))

 }catch(err){

    return res.status(500).json(new ErrorApi("Internal server error", 500, err))

 }

}
export {uploadNotes}