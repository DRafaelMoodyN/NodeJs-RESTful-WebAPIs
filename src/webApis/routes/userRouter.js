import UserController from "../controllers/userController.js";
import { userSchema } from "../schemas/userSchema.js";
import JoiValidate from "../middleware/joinValidate.js";

class UserRouter {
  constructor() {
    if (this instanceof PersonRouter) {
      throw new Error("Esta clases no puede tener instancia");
    }
  }

  static setRoute = (router) => {
    router.get("/list/", UserController.list);

    router.post(
      "/create/",
      [JoiValidate.Validate(userSchema)],
      UserController.create
    );
    return router;
  };
}

export default UserRouter;
