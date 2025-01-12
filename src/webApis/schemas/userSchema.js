import Joi from "joi";

const userSchema = Joi.object({
  userName: Joi.string().required().max(60),
  password: Joi.string().required().max(60),
  email: Joi.string().required().max(60),
  rol: Joi.array().required().max(20),
  isActive: Joi.boolean().required(),
});

export { userSchema };
