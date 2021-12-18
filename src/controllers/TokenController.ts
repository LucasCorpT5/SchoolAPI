import { Request, Response } from "express";
import prisma from "../prisma/index";

class TokenController {
  async create(req: Request, res: Response) {
    res.json("OK");
  }
}

export default new TokenController();
