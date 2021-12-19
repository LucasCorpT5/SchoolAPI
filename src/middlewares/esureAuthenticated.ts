import { Request, Response, NextFunction, response } from "express";
import { verify } from "jsonwebtoken";

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
  const authToken = req.headers.authorization;

  if (!authToken) {
    res.status(401).json({
      errorCode: "Invalid token"
    });
  }

  const [, token] = authToken.split(" ");

  try {
    const { sub } = verify(token, process.env.TOKEN_SECRET);

    req.id = sub;

    return next();
  } catch (err) {
    return res.status(401).json({
      errorCode: "Expired token"
    })
  }
}
