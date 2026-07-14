import type { Request, Response } from "express";
import { prisma } from "../DB/db.ts";
import { ErrorApi } from "../UTILITES/error.api.ts";
import { SucessApi } from "../UTILITES/sucess.api.ts";


const Dout = async (req: Request, res: Response) => {
  try {
    // Debugging log
    
   // console.log("Received request to create Dout:", req.body);
    const { title, description, userid, notesid } = req.body;
    if (!title || !description ) {

      return res
        .status(400)
        .json(new ErrorApi("Filed Required", 400, "Title and description are required"));
    }
     if (!userid || !notesid) {
      return res
        .status(400)
        .json(new ErrorApi("Filed Required", 400, "User ID and Notes ID are required"));
    }
    // console.log("Creating Dout with data:", { title, description, userid, notesid }); // Debugging log
    const dout = await prisma.dout.create({
      data: {
        title,
        description,
        userid,
        notesid,
      },
      select: {
        description: true,
        title: true,
      },
    });
     res.status(201).json(new SucessApi("Dout created successfully", 201, dout));
  } catch (error: any) {
     res
      .status(500)
      .json(new ErrorApi("Internal server error", 500, error));
  }
};

export { Dout };
