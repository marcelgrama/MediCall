import Joi from 'joi';

export const signInSchema = Joi.object().keys({
  Email: Joi.string()
    .label('Email')
    .max(30)
    .required(),
  password: Joi.string()
    .label('Password')
    .min(3)
    .max(30)
    .required()
});
export const signUpSchema = Joi.object().keys({
  Nume: Joi.string()
    .label('Nume')
    .min(3)
    .max(30)
    .required(),
  Prenume: Joi.string()
    .label('Prenume')
    .min(3)
    .max(30)
    .required(),
  Email: Joi.string()
    .label('Email')
    .min(3)
    .max(30)
    .required(),
  Telefon: Joi.string()
    .label('Telefon')
    .min(3)
    .max(30)
    .required(),
  Clinica: Joi.string()
    .label('Clinica')
    .max(30)
    .required(),
  Parola: Joi.string()
    .label('Parola')
    .min(3)
    .max(30)
    .required()
});

export const signUpDoctor = Joi.object().keys({
  Nume: Joi.string()
    .label('Nume')
    .min(3)
    .max(30)
    .required(),
  Prenume: Joi.string()
    .label('Prenume')
    .min(3)
    .max(30)
    .required(),
  Email: Joi.string()
    .label('Email')
    .min(3)
    .max(30)
    .required(),
  Telefon: Joi.string()
    .label('Telefon')
    .min(3)
    .max(30)
    .required(),
  Clinica: Joi.string()
    .label('Clinica')
    .max(30)
    .required(),
  Specializare: Joi.string()
    .label('Specializare')
    .min(3)
    .max(30)
    .required(),
  'Cod Special': Joi.string()
    .label('Cod Special')
    .min(3)
    .max(30)
    .required(),
  Parola: Joi.string()
    .label('Parola')
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
