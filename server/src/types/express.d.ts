import { Request } from 'express';

// Set the Request interface to include a userId property
declare module 'express-serve-static-core' {
  interface Request {
    userId?: string;
  }
}