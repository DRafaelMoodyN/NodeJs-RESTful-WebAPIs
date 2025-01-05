import UserSchema from "../models/schema/userSchema.js";

class UserService {
  constructor() {
    if (this instanceof UserService) {
      throw new Error("Esta clases no puede ser instancia");
    }
  }
}
