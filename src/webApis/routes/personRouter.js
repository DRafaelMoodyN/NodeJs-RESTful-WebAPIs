import PersonController from "../controllers/personController.js";
import { personSchema } from "../schemas/personSchema.js";
import JoiValidate from "../middleware/joinValidate.js";

class PersonRouter {
  constructor() {
    if (this instanceof PersonRouter) {
      throw new Error("Esta clases no puede tener instancia");
    }
  }

  static setRoute = (router) => {
    router.get("/list/", PersonController.list);

    router.post(
      "/create/",
      [JoiValidate.Validate(personSchema)],
      PersonController.create
    );
    return router;
  };
}

export default PersonRouter;
