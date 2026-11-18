import type { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/AppError.js";
import { NODE_ENV } from "../config/env.js";

export const errorHandler = (
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  const statusCode = err instanceof AppError ? err.statusCode : 500;
  const message =
    err instanceof AppError ? err.message : "Internal server error";

  if (statusCode >= 500) {
    console.error(err);
  }

  res.status(statusCode).json({
    status: "error",
    statusCode,
    message,
    ...(NODE_ENV === "development" && err instanceof Error && { stack: err.stack })
  });
};
