import express from "express";

//==================================================================================================
// Configuracion base de Express
//==================================================================================================

class Program {
  constructor() {
    if (this instanceof Program) {
      throw new Error("Esta clase no puede ser instaseada");
    }
  }

  static #setMiddleware = (app) => {
    app.use(express.json());
    // Analizar solicitued https
    app.use(express.urlencoded({ extended: true }));
  };

  static #setRoutes = (app, routes) => {
    app.use(routes);
  };

  static #setListen = (app, port) => {
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
