import PersonController from "../controllers/personController.js";

class PersonRouter {
  constructor() {
    if (this instanceof PersonRouter) {
      throw Error("Esta clases no puede tener instancia");
    }
  }

  static setRoute = (router) => {
    router.get("/list/", PersonController.getPerson);
    return router;
  };
}

export default PersonRouter;
