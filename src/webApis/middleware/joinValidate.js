import { request, response } from "express";

class JoiValidate {
  constructor() {
    if (this instanceof JoiValidate) {
      throw new Error("Esta clase no puede ser instanciada");
    }
  }

  static Validate = (schema) => {
    return (req = request, res = response, next) => {
      let { error } = schema.validate(req.body, { abortEarly: false });

      if (error) {
        const errorDetails = error.details.map((error) => error);

        const result = {
          status: "400",
          message: "validation failed",
          errors: errorDetails,
        };

        res.status(400).json(result);
      } else {
        next();
      }
    };
  };
}

export default JoiValidate;
