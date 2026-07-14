import type { Request, Response } from "express";
import { SucessApi } from "../UTILITES/sucess.api.ts";
import { ErrorApi } from "../UTILITES/error.api.ts";

export const healthcheck = async (req: Request, res: Response) => {
    try {
        return res.status(200).json(new SucessApi("Healthcheck successful", 200, "Healthcheck successful"));
    } catch (error) {
        return res.status(500).json(new ErrorApi("Healthcheck failed", 500, error));
    }
}