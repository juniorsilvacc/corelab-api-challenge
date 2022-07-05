import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import { Error } from './config/errors/Error';
import { router } from './shared/infra/routes';
import './shared/container';

const app = express();

app.use(express.json());

app.use(router);

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof Error) {
      return response.status(error.statusCode).json({
        status: 'Error',
        message: error.message,
      });
    }

    return response.status(500).json({
      status: 'Error',
      message: 'Internal server error',
    });
  },
);

export default app;
