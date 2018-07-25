import Joi from 'joi';

export const signInSchema = Joi.object().keys({
  username: Joi.string()
    .label('Username')
    .min(3)
    .max(30)
    .required(),
  password: Joi.string()
    .label('Password')
    .min(3)
    .max(30)
    .required()
});

export const signUpSchema = Joi.object().keys({
  username: Joi.string()
    .label('Username')
    .min(3)
    .max(30)
    .required(),
  email: Joi.string()
    .label('Email')
    .min(3)
    .max(30)
    .required(),
  password: Joi.string()
    .label('Password')
    .min(3)
    .max(30)
    .required()
});

export const validate = schema => (req, res, next) => {
  const validationResult = schema.validate(req.body);
  if (validationResult.error) {
    return res.send({ error: validationResult.error.details[0].message });
  }
  return next();
};
