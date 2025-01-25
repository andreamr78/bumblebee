import { Request } from 'express';

// Set the Request interface to include a userId property
declare module 'express' {
  interface Request {
    userId?: string;
  }
}