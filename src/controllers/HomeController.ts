import { Request, Response } from "express";
import prisma from "../prisma/index";

class HomeController {
  async index(req: Request, res: Response) {
    const newStudent = await prisma.student.create({
      data: {
        name: "Lucas",
        surname: "Araujo",
        email: "Lucas@gmail.com",
        age: 12,
      }
    });
    res.json(newStudent);
  }
}

export default new HomeController();
