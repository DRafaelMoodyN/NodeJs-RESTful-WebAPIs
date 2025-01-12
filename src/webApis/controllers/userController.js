import { request, response } from "express";
import { UserService } from "../../services/userService.js";

class UserController {
  constructor() {
    if (this instanceof UserController) {
      throw new Error("Esta clase no puede ser instaceada");
    }
  }

  static create = async (req = request, res = response) => {
    const model = req.body;

    const result = await UserService.create(model);

    if (result.codigo == 409) {
      return res.status(result.codigo).json(result);
    }

    res.status(200).json(result);
  };

  static list = async (req = request, res = response) => {
    const result = await UserService.getList();

    res.status(200).json(result);
  };
}

export default UserController;
