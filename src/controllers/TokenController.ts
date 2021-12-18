import { Request, Response } from "express";
import prisma from "../prisma/index";

class TokenController {
  async create(req: Request, res: Response) {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(401).json({
        error: "Invalid email or password"
      })
    }
    const user = await prisma.users.findUnique({
      where: {
        email: email,
      }
    });

    if (!user) {
      return res.status(401).json({
        error: "Invalid user"
      })
    } else {
      return res.status(200).json({
        message: "Test passed ✔",
      });
    }
  }
}

export default new TokenController();
