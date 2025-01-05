import Joi from "joi";

const userSchema = Joi.object({
  firtName: Joi.string().required().max(60),
  lastName: Joi.string().max(60),
  phone: Joi.number().max(8),
});

export { userSchema };
