import express from 'express';

import _ from 'lodash';
import logger from '../../services/serverLogger';

import User from '../models/users';
import { genAuthToken, authRequired } from '../../services/authToken';
import {
  signInSchema,
  validate,
  signUpSchema,
  signUpDoctor
} from '../../services/validation';

const router = new express.Router();

router.post('/signin', validate(signInSchema), (req, res) => {
  console.log(req.body);
  const { Email, password } = req.body;
  User.findOne(Email, password)

    .then(response => {
      if (_.isEmpty(response)) {
        throw new Error('E-mail sau parolă greșită');
      }
    })
    .then(upsertData => {
      const dataInToken = upsertData;

      return genAuthToken({ ...dataInToken });
    })
    .then(authToken => res.send({ authToken }))
    .catch(error => {
      res.send({ error: error.message });
      logger.error(error.message);
    });
});

router.post(
  '/signup',
  validate(signUpSchema),

  (req, res) => {
    console.log(req.body);
    const userData = {
      Nume: req.body.Nume,
      Prenume: req.body.Prenume,
      Email: req.body.Email,
      Telefon: req.body.Telefon,
      Clinica: req.body.Clinica,
      Parola: req.body.Parola
    };
    User.create(userData)
      .then(() => res.send({ success: true }))
      .catch(error => {
        res.send({ error: error.message });
        logger.error(error.message);
      });
  }
);

router.post(
  '/signupdoctor',
  validate(signUpDoctor),

  (req, res) => {
    console.log(req.body);
    const userData = {
      Nume: req.body.Nume,
      Prenume: req.body.Prenume,
      Email: req.body.Email,
      Telefon: req.body.Telefon,
      Clinica: req.body.Clinica,
      Specializare: req.body.Specializare,
      CodSpecial: req.body.CodSpecial,
      Parola: req.body.Parola
    };
    User.create(userData)
      .then(() => res.send({ success: true }))
      .catch(error => {
        res.send({ error: error.message });
        logger.error(error.message);
      });
  }
);

router.get('/user', authRequired, (req, res) => {
  User.findById('admin')
    .then(userData => _.omit(userData, ['_id', '__v']))
    .then(userData => res.send(userData));
});

export default router;
