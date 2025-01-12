import UserSchema from "../models/schema/userSchema.js";
import UserCreateDto from "./Dto/userCreateDto.js";
import Bcrypt from "../commons/bcrypt.js";

class UserService {
  constructor() {
    if (this instanceof UserService) {
      throw new Error("Esta clases no puede ser instancia");
    }
  }

  static create = async (data) => {
    const model = new UserCreateDto(data);
    const { email } = model;
    model.password = await Bcrypt.hash(model.password);

    try {
      const emailExist = await UserSchema.findOne({
        email: email,
      }).exec();

      if (emailExist) {
        return {
          codigo: 409,
          message: "El email ya existe",
        };
      }

      const result = await UserSchema.create({
        ...model,
      });

      return result;
    } catch (error) {}
  };

  static getList = async () => {
    try {
      const result = UserSchema.find().exec();

      return result;
    } catch (error) {}
  };
}

export { UserService };
