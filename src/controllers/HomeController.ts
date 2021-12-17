import { Request, Response } from "express";
import prisma from "../prisma/index";
import verific from "../models/verification";
class HomeController {
  async index(req: Request, res: Response) {
    res.json("Test passed ✔");
  }
}

export default new HomeController();
