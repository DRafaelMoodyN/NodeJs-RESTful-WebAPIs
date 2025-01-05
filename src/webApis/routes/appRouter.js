import UserRouter from "./userRouter.js";

class AppRouter {
  constructor() {
    if (this instanceof AppRouter) {
      throw new Error("Esta clase no puede tener instancia");
    }
  }

  static getRouter = (router) => {
    router.use("/user", UserRouter.setRoute(router));

    return router;
  };
}

export default AppRouter;
