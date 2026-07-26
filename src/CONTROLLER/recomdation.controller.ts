import type { Request, Response } from "express";
import { prisma } from "../DB/db.ts";
import { ErrorApi } from "../UTILITES/error.api.ts";
import { SucessApi } from "../UTILITES/sucess.api.ts";

const GetRecomdation = async(req: Request, res: Response) => {
    try{

         const {userid}=req.params;
         const IsUserExist = await prisma.user.findUnique({
            where:{
                 id:userid as string 
            }
         });
         if(!IsUserExist){
            return res.status(404).json( new ErrorApi(" user not found ",404,{
                message:"user not found in the db"
            }));
         }

         const RecomdedNote= await prisma.note.findMany({
            where:{
                forsem:IsUserExist.semester,
                forstream:IsUserExist.stream,
                

            },
            select:{
                title:true,
                subject:true,
                forsem:true,
                forstream:true,
                fileurl:true,
                createdAt:true,
                
                uploader:{
                     select:{
                        username:true,
                  
                   avatarUrl:true
                     }
                }
            
            },
            orderBy:{
                createdAt:"desc"
            }
             
         })

         res.status(200).json(new SucessApi("recomded notes found",200,{
            data:RecomdedNote
         }))
         


    }catch(error){
         console.log(error)
        res.status(500).json(new ErrorApi("something went wrong ",500,{
            info:"recomdation service crashed ",
            reason :error
        }))

    }
}

export {GetRecomdation}

