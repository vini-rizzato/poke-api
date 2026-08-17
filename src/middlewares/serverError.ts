import { Request, Response, NextFunction } from 'express';

function serverError(err: Error, req: Request, res: Response, next: NextFunction) {
  console.error(err);
  res.status(500).json({ message: 'Internal server error' });
};

export default serverError;