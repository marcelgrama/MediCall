import clientConfig from './client';
import env from '../services/env';

env.restrictToServer();

export default {
  ...clientConfig,
  secretKey: 'M3dicall!',
  dbURL: process.env.MONGODB_URI
};
