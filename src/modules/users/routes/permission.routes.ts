import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import { PermissionController } from '../controllers/PermissionController';

export const permissionRouter = Router();
const permissionController = new PermissionController();

permissionRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      description: Joi.string().optional(),
    },
  }),
  permissionController.create,
);
