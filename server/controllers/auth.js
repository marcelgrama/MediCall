import express from 'express';

import _ from 'lodash';
import logger from '../../services/serverLogger';

import User from '../models/users';
import { genAuthToken, authRequired } from '../../services/authToken';
import {
  signInSchema,
  validate,
  signUpSchema
} from '../../services/validation';

const router = new express.Router();

router.post('/signin', validate(signInSchema), (req, res) => {
  const { username, password } = req.body;
  User.findOne(username, password)

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
    const userData = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
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
