import mongoose from "mongoose";

class MongoDbContext {
  static model = {};

  constructor() {
    if (this instanceof MongoDbContext) {
      throw new Error("Esta clase no puede ser intanciada");
    }
  }

  static connect = async (url) => {
    try {
      await mongoose.connect(url);
      console.log("Connection a mongo exitosa");
    } catch (error) {
      console.log("Connection a mongo error", error);
    }
  };
}

export default MongoDbContext;
