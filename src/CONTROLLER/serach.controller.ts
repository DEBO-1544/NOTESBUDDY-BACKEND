import type { Request, Response } from "express";
import { SucessApi } from "../UTILITES/sucess.api.ts";
import { ErrorApi } from "../UTILITES/error.api.ts";
import { prisma } from "../DB/db.ts";

const SerachBar = async (req: Request, res: Response) => {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json(
        new ErrorApi("no text provided", 400, {
          info: "text is not provided by user ",
        })
      );
    }

    const notefind = await prisma.note.findMany({
      where: {
        title: {
          contains: text,
          mode: "insensitive",
        },
      },
      select: {
        title: true,
        subject: true,
        forsem: true,
        forstream: true,
        fileurl: true,
        createdAt: true,
        uploader: {
          select: {
            username: true,
            avatarUrl: true,
            level:true
          },
          
        },
      },
     orderBy:{
        uploader:{
            level:"desc"
        }
     }
      
    });

    return res.status(200).json(
      new SucessApi("notes found", 200, {
        data: notefind,
      })
    );
  } catch (error) {
    console.log(error);
    return res.status(500).json(
      new ErrorApi("something went wrong ", 500, {
        info: "search service crashed ",
        reason: error,
      })
    );
  }
};

export { SerachBar };
