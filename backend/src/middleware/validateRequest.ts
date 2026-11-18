import type {
  Request,
  Response,
  NextFunction
} from "express";

import type { ZodType } from "zod";

export function validateRequest(schema: ZodType) {
  return (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    // TODO:

    const result = schema.safeParse(req.body);
    if (!result.success) {
      return next(result.error);
    }
    req.body = result.data;
    next();
   
  };
}