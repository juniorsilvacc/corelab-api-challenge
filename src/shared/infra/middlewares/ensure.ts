import { verify } from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import { Error } from '../../../config/errors/error';
import auth from '../../../config/auth';

interface IPayload {
  sub: string;
}

export default function ensure(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authorization = request.headers.authorization;

  if (!authorization) {
    throw new Error('JWT token is missing');
  }

  const [, token] = authorization.split(' ');

  try {
    const { sub: user_id } = verify(token, auth.jwt.secret) as IPayload;

    request.user = {
      id: user_id,
    };

    next();
  } catch (error) {
    throw new Error('JWT token is missing');
  }
}
