import { Request, Response } from "express";
import prisma from "../prisma/index";

class HomeController {
  async index(req: Request, res: Response) {
    res.json({ test_passsed: true });
  }
}

export default new HomeController();
