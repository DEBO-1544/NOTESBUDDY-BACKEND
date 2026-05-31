import {prisma} from '../DB/db.js';
import type {Request, Response} from 'express';
const Onboarding= async(req:Request,res:Response)=>{

    try{
      const {clerkid, name , email,  institutename, presentyear, stream, semester,username}= req.body;
      let { avatarUrl}= req.body;

      if(!clerkid || !name || !email ||!institutename || !presentyear || !stream || !semester || !username){

        return res.status(400).json({message:"Incomplete data provided"});
      }
       if(!avatarUrl){
        avatarUrl= avatarUrl||"NA"
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
            id:true,
            clerkid:true,

        }
      })
        return res.status(201).json({message:"User created successfully", user:User})


    }catch(error:any){

         if (error.code === "P2002") {
      return res.status(409).json({
        message: "Username, email, or Clerk ID already exists",
      });
    }

        return res.status(500).json({message:"Internal server error", error:error})
        
    }

}
export {Onboarding}