import { Request, response, Response } from "express";
import prisma from "../prisma/index";
import { hash, compare } from "bcryptjs";
import jwt from "jsonwebtoken";

class TokenController {
  async create(req: Request, res: Response) {
    let { email, password } = req.body;

    if (!email || !password) {
      return res.status(401).json({
        error: "Invalid email or password"
      })
    }

    const user = await prisma.users.findUnique({
      where: {
        email: email
      }
    });

    if (!user) {
      res.status(401).json({
        error: "Invalid email"
      });
    } else {

      const passwordIsCompared = await compare(req.body.password, user.password);

      if (!passwordIsCompared) {
        res.status(401).json({
          message: "Invalid password"
        });
      } else {
        const { id } = user;
        const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
          expiresIn: process.env.TOKEN_EXPIRATION
        });

        return res.json({
          "token": token
        });
      }
    }
  }
}

export default new TokenController();
