import PersonRouter from "./personRouter.js";

class AppRouter {
  constructor() {
    if (this instanceof AppRouter) {
      throw Error("Esta clase no puede tener instancia");
    }
  }

  static getRouter = (router) => {
    console.log("router");

    router.use("/person", PersonRouter.setRoute(router));

    return router;
  };
}

export default AppRouter;
