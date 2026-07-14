import {prisma} from '../DB/db.ts';
import type {Request, Response} from 'express';
import { ErrorApi } from '../UTILITES/error.api.ts';
import { SucessApi } from '../UTILITES/sucess.api.ts';
const Onboarding= async(req:Request,res:Response)=>{

    try{
      const {clerkid, name , email,  institutename, presentyear, stream, semester,username}= req.body;
      let { avatarUrl}= req.body;

      if(!clerkid || !name || !email ||!institutename || !presentyear || !stream || !semester || !username){
         return res.status(400).json(new ErrorApi("Incomplete data provided", 400, null));
      }

      
       if(!avatarUrl){
        avatarUrl= avatarUrl||"https://nbylpeyipmxdofvgixjb.supabase.co/storage/v1/object/public/AVATAR/user.png"
       }

      const User= await prisma.user.create({
        data:{
            clerkid,
            name,
            email,
            avatarUrl,
            institutename,
            presentyear,
            stream,
            semester,
            username,
            
        },
        select:{
           institutename:true,
            presentyear:true,
            stream:true,
            semester:true,
            username:true,

        }
      })
        return res.status(201).json(new SucessApi("User created successfully", 201, User))


    }catch(error:any){

         if (error.code === "P2002") {
      return res.status(409).json(new ErrorApi("User already exists", 409, "Username, email, or Clerk ID already exists"));
    }

        return res.status(500).json(new ErrorApi("Internal server error", 500, error))
        
    }

}
export {Onboarding}