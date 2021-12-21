import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import prisma from "../prisma/index";

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
  const authToken = req.headers.authorization;

  if (!authToken) {
    res.status(401).json({
      errorCode: "Invalid token"
    });
  }

  const [, token] = authToken.split(" ");

  try {
    const dados = verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;
    const user = prisma.users.findFirst({
      where: {
        id: id,
        email: email
      }
    });

    if (!user) {
      return res.status(401).json({
        errorCode: "Invalid user",
      })
    }

    req.id = dados;

    return next();
  } catch (err) {
    return res.status(401).json({
      errorCode: "Expired token",
    })
  }
}
