import prisma from '../prisma/index';
import { Request, Response } from "express";
import { hash, compare } from "bcryptjs";

export default class verific {
  async index(req: Request, res: Response) {
    let password = req.body.password;
    password = await hash(password, 10);
    if (!password) {
      res.json("Invalid password");
    }
    const email = req.body.email;
    if (!email) {
      res.json("Invalid email");
    }
  }
}
