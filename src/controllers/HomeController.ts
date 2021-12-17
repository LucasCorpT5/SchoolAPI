import { Request, Response } from "express";

class HomeController {
  index(req: Request, res: Response) {
    res.json({
      tudoCerto: true
    });
  }
}

export default new HomeController();
