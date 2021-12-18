import { Request, Response } from "express";
import prisma from "../prisma/index";
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
      const users = await prisma.users.findMany({
        orderBy: {
          created_at: "asc",
        }
      });
      res.json(users);
    } catch (err) {
      console.log(`Error: ${err}`);
    }
  }
  async show(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const user = await prisma.users.findUnique({
        where: {
          id: id
        },
      });
      res.json(user);
    } catch (err) {
      console.log(`Error: ${err}`);
    }
  }
  async update(req: Request, res: Response) {
    try {
      const { id, name, email } = req.body;
      let password = req.body.password;
      password = await hash(password, 10);
      const updateUser = await prisma.users.update({
        where: {
          id: id
        },
        data: {
          name: name,
          email: email,
          password: password
        }
      });
      if (!name) {
        res.json("Invalid name");
      }
      if (!password) {
        res.json("Invalid password");
      }
      if (!email) {
        res.json("Invalid email")
      }
      res.json(updateUser);
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
