import { request, response } from "express";

class UserController {
  constructor() {
    if (this instanceof PersonController) {
      throw new Error("Esta clase no puede ser instaceada");
    }
  }

  static create = (req = request, res = response) => {
    res.status(200).json({ result: "create person" });
  };

  static list = (req = request, res = response) => {
    res.status(200).json({ result: "get person" });
  };
}

export default UserController;
