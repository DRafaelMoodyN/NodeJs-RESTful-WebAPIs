import pkg from "bcryptjs";

const { compareSync, hashSync } = pkg;

class Bcrypt {
  constructor() {
    if (this instanceof Bcrypt) {
      throw new Error("Esta clase no puede ser instanciada");
    }
  }

  static compara = (password, hasded) => compareSync(password, hasded);

  static hash = async (password) => hashSync(password);
}

export default Bcrypt;
