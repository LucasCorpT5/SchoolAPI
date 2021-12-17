import { Request, Response } from "express";
import prisma from "../prisma/index";
import verific from "../models/verification";
import { hash, compare } from "bcryptjs";

class UserController {
  async create(req: Request, res: Response) {
    try {
      let password = req.body.password;
      password = await hash(password, 10);
      const email = req.body.email;
      const name = req.body.name;
      if (!password) {
        res.json("Invalid password");
      }
      if (!name) {
        res.json("Invalid name");
      }
      // const email = req.body.email;
      // const password = req.body.password;
      if (!email) {
        res.json("Invalid email");
      }
      const newUser = await prisma.users.create({
        data: {
          name: name,
          email: email,
          password: password
        }
      });
      res.json(newUser);
    } catch (err) {
      console.log(`Error: ${err}`);
    }
  }
  async index(req: Request, res: Response) {
    try {

    } catch (err) {
      console.log(`Error: ${err}`);
    }
  }
}

export default new UserController();
/*
data: {
  name: "Lucas22",
  email: "lucdasss2sssdd@gmail.com",
  password: "232332",
}
\*/