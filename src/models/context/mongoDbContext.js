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

  static getModel = (name, schemaDefinition) => {
    if (MongoDbContext.name[name]) {
      return MongoDbContext.model[name];
    }

    const schema = mongoose.Schema(schemaDefinition);
    const model = mongoose.model(name, schema);
    MongoDbContext.model[name] = model;

    return model;
  };
}

export default MongoDbContext;
