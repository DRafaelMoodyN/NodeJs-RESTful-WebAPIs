import { Schema } from "mongoose";
import MongoDbContext from "../context/mongoDbContext";

const userSchema = new Schema({
  userName: {
    type: String,
    require: [true, "El nombre de usuario es requerido"],
  },

  email: {
    type: String,
    require: [true, "El email es requerido"],
    unique: [true, "El email es unico"],
  },

  password: {
    type: String,
    require: [true, "El password es requerido"],
  },

  roles: {
    type: String,
    default: "BASIC",
  },

  isActive: {
    type: Boolean,
    default: true,
  },
});

const UserSchema = MongoDbContext.getModel("User", userSchema);

export default UserSchema;
