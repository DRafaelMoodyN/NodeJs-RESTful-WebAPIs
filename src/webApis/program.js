import express from "express";

class Program {
  static #setMiddleware = ({ application: app } = express) => {
    app.use(express.json);
    // Analizar solicitued https
    app.use(express.urlencoded({ extended: true }));
  };

  static #setRoutes = ({ application: app } = express, routes) => {
    app.use(routes);
  };

  static #setListen = ({ application: app } = express, port) => {
    app.listen(port, () => {
      console.log(`http://localhost:${port}/`);
    });
  };

  static init = (express, router, port = 5012) => {
    this.#setMiddleware(express);
    this.#setRoutes(express, router);
    this.#setListen(express, port);
  };
}

export default Program;
