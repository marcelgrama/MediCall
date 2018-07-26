import clientConfig from './client';
import env from '../services/env';

env.restrictToServer();

export default {
  ...clientConfig,
  dbURL: process.env.MONGODB_URI
};
