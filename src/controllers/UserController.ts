import { Request, response, Response } from "express";
import prisma from "../prisma/index";
import { hash, compare } from "bcryptjs";
import { ensureAuthenticated } from "../middlewares/esureAuthenticated";

class UserController {
  async create(req: Request, res: Response) {
    try {
      const { name, email, secret_key } = req.body;
      let password = req.body.password;
      password = await hash(password, 10);
      if (!password) {
        res.status(401).json("Invalid password");
      }
      if (!name) {
        res.status(401).json("Invalid name");
      }
      // const email = req.body.email;
      // const password = req.body.password;
      if (!email) {
        res.status(401).json("Invalid email");
      }
      const newUser = await prisma.users.create({
        data: {
          name: name,
          email: email,
          secret_key: secret_key,
          password: password
        }
      });
      res.json(newUser);
    } catch (err) {
      console.log(`Error: ${err}`);
    }
  }

  async show(req: Request, res: Response) {
    try {
      const { id } = req.body;

      const user = await prisma.users.findUnique({
        where: {
          id: id,
        },
        select: {
          id: true,
          name: true,
          email: true
        }
      });
      res.json(user);
    } catch (err) {
      console.log(`Error: ${err}`);
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { name, email, id } = req.body;
      let password = req.body.password;
      password = await hash(password, 10);
      const updateUser = await prisma.users.update({
        where: {
          id: id
        },
        data: {
          email: email,
          name: name,
          password: password,
        },
      });

      res.json(updateUser);
    } catch (err) {
      console.log(`Error: ${err}`);
    }
  }

  async index(req: Request, res: Response) {
    try {
      const showinfo = await prisma.users.findMany({
        select: {
          id: true,
          name: true,
          email: true,
          password: true,
        }
      });
      res.json(showinfo);
    } catch (err) {
      console.log(`Error: ${err}`);
    }
  }

  async delete(req: Request, res: Response) {
    const id = req.body.id;
    const deleteUser = await prisma.users.delete({
      where: {
        id: id
      },
    });

    res.json({ Response: "Usuario deletado" });
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
