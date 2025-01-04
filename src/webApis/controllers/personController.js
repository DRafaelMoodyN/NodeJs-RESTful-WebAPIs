import { request, response } from "express";

class PersonController {
  constructor() {
    if (this instanceof PersonController) {
      throw Error("Esta clase no puede ser instaceada");
    }
  }

  static getPerson = (req = request, res = response) => {
    res.status(200).json({ result: "get person 1" });
  };
}

export default PersonController;
