import * as Express from "express";
import Joi from "joi";

import { CustomError } from "../models";

export const validateData = (schema: Joi.ObjectSchema<any>) => {
  return (req: Express.Request, _: Express.Response, next: Express.NextFunction) => {
    const { error } = schema.validate(req.body);

    if (error) {
      throw CustomError(error.message);
    }

    next();
  };
}