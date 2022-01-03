import { NextFunction, Request, Response } from 'express';
import manyChat from './ManyChat';
import { Settings, ManyChatInterface } from './Types';

export * from './Types';

declare global {
  namespace Express {
    interface Request {
      manyChat: ManyChatInterface;
    }
  }
}

export default (additionalSettings: Settings) => (req: Request, res: Response, next: NextFunction) => {
  const settings: Settings = {
    ...additionalSettings
  }

  req.manyChat = manyChat(settings);

  next();
};
